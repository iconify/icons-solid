import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etlgx3wgr.css';
import '../../css/g/gzy7rji7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="etlgx3wgr"/><path class="gzy7rji7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pyramid"} {...others} />);
}

export default Component;

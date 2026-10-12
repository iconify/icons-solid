import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wo_sc9bzi.css';
import '../../css/l/l8e3ucb9j.css';
import '../../css/s/s581r1p6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wo_sc9bzi"/><path class="l8e3ucb9j"/><path class="s581r1p6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-xml"} {...others} />);
}

export default Component;

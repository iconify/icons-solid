import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7hinzb1w.css';
import '../../css/g/g1myj0bgn.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="f7hinzb1w"/><path class="g1myj0bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bh"} {...others} />);
}

export default Component;

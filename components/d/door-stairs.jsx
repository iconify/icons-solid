import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnu2vgbrj.css';
import '../../css/j/jllqj-qnq.css';
import '../../css/g/g787p2b1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dnu2vgbrj"/><path class="jllqj-qnq"/><path class="g787p2b1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:door-stairs"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxxriwbma.css';
import '../../css/r/r7u9g503m.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/qh9dwkb_c.css';
import '../../css/h/h0rce4biq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gxxriwbma"/><path class="r7u9g503m"/><g class="ij2x_72vy"><path class="qh9dwkb_c"/><path class="h0rce4biq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:copy"} {...others} />);
}

export default Component;

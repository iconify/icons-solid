import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/d/dcxmy_bda.css';
import '../../css/t/t2yrjkbhe.css';
import '../../css/j/j2raf0bsp.css';
import '../../css/n/n8cr0ibzg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/llwlffbje.css';
import '../../css/y/yz_kflb0a.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="dcxmy_bda"/><path class="t2yrjkbhe"/><path class="j2raf0bsp"/><path class="n8cr0ibzg"/></g><g class="ij2x_72vy"><path class="llwlffbje"/><path class="yz_kflb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hospital"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vamzte2iy.css';
import '../../css/f/fg9e45exk.css';
import '../../css/l/ls75-bcir.css';
import '../../css/u/u-x90pvko.css';
import '../../css/p/p1uehobqi.css';
import '../../css/e/ec3904xcj.css';
import '../../css/t/te0_fmbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vamzte2iy"/><path class="fg9e45exk"/><path class="ls75-bcir"/><path class="u-x90pvko"/><path class="p1uehobqi"/><path class="ec3904xcj"/><path class="te0_fmbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:perfume-linear"} {...others} />);
}

export default Component;

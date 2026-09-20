import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j7wfdpbwo.css';
import '../../css/f/fg9e45exk.css';
import '../../css/t/te0_fmbtj.css';
import '../../css/s/sbmsxlkla.css';
import '../../css/c/cgj19skhd.css';
import '../../css/e/ec3904xcj.css';
import '../../css/p/p1uehobqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j7wfdpbwo"/><path class="fg9e45exk"/><path class="te0_fmbtj"/><path class="sbmsxlkla"/><path class="cgj19skhd"/><path class="ec3904xcj"/><path class="p1uehobqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:perfume-broken"} {...others} />);
}

export default Component;

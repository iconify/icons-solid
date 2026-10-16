import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/w/w77wv7b6v.css';
import '../../css/f/fsd_ulzzb.css';
import '../../css/j/jlhfl4b_x.css';
import '../../css/e/e5tc9_bhb.css';

const viewBox = {"width":458,"height":458};
const content = `<g class="kuf42lb8e"><path class="w77wv7b6v"/><path fill="url(#SVGecL8tdmW)" class="fsd_ulzzb"/><defs><linearGradient id="SVGecL8tdmW" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(0 457.069 -457.069 0 229.145 0)" gradientUnits="userSpaceOnUse"><stop offset="0" class="jlhfl4b_x"/><stop offset="1" class="e5tc9_bhb"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:homer"} {...others} />);
}

export default Component;

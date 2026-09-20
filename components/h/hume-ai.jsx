import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfw6eubdm.css';
import '../../css/x/xnb2yybwq.css';
import '../../css/z/zr_uddbtk.css';
import '../../css/t/tv38hhbqd.css';
import '../../css/w/wm2tr8hdu.css';
import '../../css/a/a6c0f8_qy.css';
import '../../css/e/e4ow_pbcf.css';
import '../../css/a/az4ni6bix.css';
import '../../css/l/l_4s2ibhd.css';

const viewBox = {"width":1200,"height":1200};
const content = `<g class="ft5dv1b6b"><path class="jfw6eubdm"/><path class="xnb2yybwq"/><path class="zr_uddbtk"/><path class="tv38hhbqd"/><path fill="url(#SVGq7IQOdGK)" class="wm2tr8hdu"/><path class="a6c0f8_qy"/><path class="e4ow_pbcf"/><defs><linearGradient id="SVGq7IQOdGK" x1="917.02" x2="959.498" y1="753.152" y2="610.135" gradientUnits="userSpaceOnUse"><stop offset=".266" class="az4ni6bix"/><stop offset=".578" class="l_4s2ibhd"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hume-ai"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d29eyqbmm.css';
import '../../css/f/fmxavuxvx.css';
import '../../css/u/uldscuw0b.css';
import '../../css/u/uemtorgtl.css';
import '../../css/a/a2hubpp1a.css';
import '../../css/s/syxyqmb7f.css';
import '../../css/z/zwji2hboz.css';
import '../../css/z/zrzdoyn6i.css';
import '../../css/r/rm4mpfe4x.css';

const viewBox = {"width":43.5,"height":65};
const content = `<defs><linearGradient id="SVGEVtYsLVL" x1="5.9" x2="27.6" y1="28" y2="64.5" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d29eyqbmm"/><stop offset="1" class="fmxavuxvx"/></linearGradient><linearGradient id="SVGar6HfJtH" x1="29" x2="26.5" y1="38.5" y2="-5" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d29eyqbmm"/><stop offset=".6" class="uldscuw0b"/><stop offset="1" class="uemtorgtl"/></linearGradient><clipPath id="SVGKEZCdd9S"><path class="a2hubpp1a"/></clipPath></defs><g clip-path="url(#SVGKEZCdd9S)"><path class="syxyqmb7f"/><path fill="url(#SVGEVtYsLVL)" class="zwji2hboz"/><path class="zrzdoyn6i"/><path fill="url(#SVGar6HfJtH)" class="rm4mpfe4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:firebase-studio"} {...others} />);
}

export default Component;

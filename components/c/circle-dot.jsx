import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/c/c0qou5b4n.css';
import '../../css/t/tcgdd0img.css';
import '../../css/z/zrzc3nxas.css';
import '../../css/c/c2fzob3kw.css';
import '../../css/q/qi1_j_b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGssztEN0r" cx="7.42" cy="6.18" r="26.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="c0qou5b4n wm-shadow"/><path fill="url(#SVGssztEN0r)" class="tcgdd0img wm-k"/><path class="wm-k zrzc3nxas"/><path class="c2fzob3kw wm-k"/><path class="qi1_j_b_o wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:circle-dot"} {...others} />);
}

export default Component;

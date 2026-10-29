import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/u/urdsoyirw.css';
import '../../css/k/klalqjb5s.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/j/jeoe138-y.css';
import '../../css/u/ux8vnfb5c.css';
import '../../css/k/khdp22cvn.css';
import '../../css/b/bg6_vwbtf.css';
import '../../css/t/t5ctakbka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG3eVWrbJQ" cx="12" cy="13.77" r="14.51" fx="9.44" fy="8.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGDDdOMbZc" cx="12" cy="14.2" r="13.63" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGME92gdQt" cx="12" cy="13.11" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGME92gdQt)" class="azx2d2tww wm-deco"/><path class="jeoe138-y wm-shadow"/><path fill="url(#SVGDDdOMbZc)" class="ux8vnfb5c wm-shine"/><path fill="url(#SVG3eVWrbJQ)" class="khdp22cvn wm-k"/><path class="bg6_vwbtf wm-k"/><path class="t5ctakbka wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:speaker"} {...others} />);
}

export default Component;

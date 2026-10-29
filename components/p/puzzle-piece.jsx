import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/a/azx2d2tww.css';
import '../../css/u/uootfyxde.css';
import '../../css/i/inu0wib0j.css';
import '../../css/q/qzzgtkfai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGjT55IeGH" cx="12" cy="12.2" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient><radialGradient id="SVGZfELScRx" cx="12.5" cy="13.03" r="12.28" fx="9.52" fy="8.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient></defs><path fill="url(#SVGjT55IeGH)" class="azx2d2tww wm-deco"/><path class="uootfyxde wm-shadow"/><path fill="url(#SVGZfELScRx)" class="inu0wib0j wm-k"/><path class="qzzgtkfai wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:puzzle-piece"} {...others} />);
}

export default Component;

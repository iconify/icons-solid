import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/a/azx2d2tww.css';
import '../../css/e/e2olkk5hx.css';
import '../../css/q/qm523yb3b.css';
import '../../css/u/uxfcltbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG3rGhzeRd" cx="12" cy="12.65" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient><radialGradient id="SVGodgw3dRt" cx="12" cy="13.11" r="11.81" fx="9.14" fy="9.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient></defs><path fill="url(#SVG3rGhzeRd)" class="azx2d2tww wm-deco"/><path class="e2olkk5hx wm-shadow"/><path fill="url(#SVGodgw3dRt)" class="qm523yb3b wm-k"/><path class="uxfcltbmp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:check"} {...others} />);
}

export default Component;

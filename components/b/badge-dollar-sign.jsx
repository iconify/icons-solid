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
import '../../css/s/s_aa_qkmv.css';
import '../../css/x/xw-kudr9u.css';
import '../../css/p/pkfftqbvl.css';
import '../../css/p/pvn1velbz.css';
import '../../css/t/t0bnbdcvt.css';
import '../../css/l/lmx-0o2dv.css';
import '../../css/m/md6rl_1yx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGRKdM2dIU" cx="12" cy="13.76" r="14.51" fx="8.49" fy="8.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGDDdOMbZc" cx="12" cy="14.2" r="13.63" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGgpDXnd6r" cx="12" cy="13.1" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGgpDXnd6r)" class="azx2d2tww wm-deco"/><path class="s_aa_qkmv wm-shadow"/><path fill="url(#SVGDDdOMbZc)" class="wm-shine xw-kudr9u"/><path fill="url(#SVGRKdM2dIU)" class="pkfftqbvl wm-k"/><path class="pvn1velbz wm-k"/><path class="t0bnbdcvt wm-shine"/><path class="lmx-0o2dv wm-deco"/><path class="md6rl_1yx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:badge-dollar-sign"} {...others} />);
}

export default Component;

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
import '../../css/y/y-uh5p4yn.css';
import '../../css/j/j7cpi87tb.css';
import '../../css/t/t9ll2cbxr.css';
import '../../css/h/ho5jshbmp.css';
import '../../css/p/perr0_bhm.css';
import '../../css/y/ytyaehh4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGkCnCoIKO" cx="12.24" cy="13.73" r="12.86" fx="9.13" fy="8.92" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGRSKOfcxF" cx="12.24" cy="14.1" r="12.08" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGHEPdNcTL" cx="12.24" cy="13.17" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGHEPdNcTL)" class="azx2d2tww wm-deco"/><path class="wm-shadow y-uh5p4yn"/><path fill="url(#SVGRSKOfcxF)" class="j7cpi87tb wm-shine"/><path fill="url(#SVGkCnCoIKO)" class="t9ll2cbxr wm-k"/><path class="ho5jshbmp wm-shine"/><path class="perr0_bhm wm-deco"/><path class="wm-deco ytyaehh4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:subscript"} {...others} />);
}

export default Component;

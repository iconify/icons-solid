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
import '../../css/g/gb56mdbpb.css';
import '../../css/u/uf6tt_ehb.css';
import '../../css/r/rq65cicgp.css';
import '../../css/b/bo751n4yj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGCvaLXbGS" cx="12" cy="13.68" r="13.86" fx="8.8" fy="8.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient><radialGradient id="SVGb1QNAcbg" cx="12" cy="14.1" r="13.02" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGI5yZ6d8X" cx="12" cy="13.05" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGI5yZ6d8X)" class="azx2d2tww wm-deco"/><path class="gb56mdbpb wm-shadow"/><path fill="url(#SVGb1QNAcbg)" class="uf6tt_ehb wm-shine"/><path fill="url(#SVGCvaLXbGS)" class="rq65cicgp wm-k"/><path class="bo751n4yj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:server"} {...others} />);
}

export default Component;

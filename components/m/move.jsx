import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svsyk2bqe.css';
import '../../css/d/dhau0jb_j.css';
import '../../css/u/urdsoyirw.css';
import '../../css/k/klalqjb5s.css';
import '../../css/p/pp783-bfu.css';
import '../../css/j/j10y_sbul.css';
import '../../css/k/k_sq1bc2u.css';
import '../../css/v/vicc33bvr.css';
import '../../css/a/azx2d2tww.css';
import '../../css/h/hv3ngfbty.css';
import '../../css/s/svv6yzmvm.css';
import '../../css/s/sh87-fbsb.css';
import '../../css/s/soba8160e.css';
import '../../css/v/v74pbrbfq.css';
import '../../css/o/ot8jyxx6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGOcYTbcWV" cx="12" cy="13.61" r="13.2" fx="8.8" fy="8.41" gradientUnits="userSpaceOnUse"><stop offset="0" class="svsyk2bqe"/><stop offset=".45" class="svsyk2bqe"/><stop offset="1" class="dhau0jb_j"/></radialGradient><radialGradient id="SVGpVcURvuP" cx="12" cy="14.01" r="12.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGX8jhTdjR" cx="12" cy="13.01" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGX8jhTdjR)" class="azx2d2tww wm-deco"/><path class="hv3ngfbty wm-shadow"/><path fill="url(#SVGpVcURvuP)" class="svv6yzmvm wm-shine"/><path fill="url(#SVGOcYTbcWV)" class="sh87-fbsb wm-k"/><path class="soba8160e wm-shine"/><path class="v74pbrbfq wm-deco"/><path class="ot8jyxx6i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:move"} {...others} />);
}

export default Component;

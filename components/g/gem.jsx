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
import '../../css/p/pckah-2lg.css';
import '../../css/s/sl9cg6ahf.css';
import '../../css/s/sq3z3ww6i.css';
import '../../css/w/wp2wwxbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGYoaWHdXS" cx="12" cy="13.81" r="13.16" fx="8.81" fy="8.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="svsyk2bqe"/><stop offset=".45" class="svsyk2bqe"/><stop offset="1" class="dhau0jb_j"/></radialGradient><radialGradient id="SVGWJ3BbcAJ" cx="12" cy="14.2" r="12.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="urdsoyirw"/><stop offset=".5" class="klalqjb5s"/><stop offset="1" class="pp783-bfu"/></radialGradient><radialGradient id="SVGnpOcnTjv" cx="12" cy="13.22" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="j10y_sbul"/><stop offset=".55" class="k_sq1bc2u"/><stop offset="1" class="vicc33bvr"/></radialGradient></defs><path fill="url(#SVGnpOcnTjv)" class="azx2d2tww wm-deco"/><path class="pckah-2lg wm-shadow"/><path fill="url(#SVGWJ3BbcAJ)" class="sl9cg6ahf wm-shine"/><path fill="url(#SVGYoaWHdXS)" class="sq3z3ww6i wm-k"/><path class="wm-shine wp2wwxbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:gem"} {...others} />);
}

export default Component;

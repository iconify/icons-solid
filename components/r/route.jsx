import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rcd_n4bfe.css';
import '../../css/g/gcf51vb3b.css';
import '../../css/s/s94t7p8vw.css';
import '../../css/o/o29xrxbof.css';
import '../../css/g/gy329pbri.css';
import '../../css/r/rh2vy95xl.css';
import '../../css/j/jagig_bgj.css';
import '../../css/c/cg2d9z_1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rcd_n4bfe wm-k"/><path class="gcf51vb3b wm-a"/><path class="s94t7p8vw wm-deco"/><path fill="url(#SVGWIPAFndQ)" class="o29xrxbof wm-k"/><path class="gy329pbri wm-a"/><path class="rh2vy95xl wm-shadow"/><path class="jagig_bgj wm-shine"/><path class="cg2d9z_1b wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:route"} {...others} />);
}

export default Component;

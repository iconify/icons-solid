import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/szlwnymgj.css';
import '../../css/x/xs1u29b9i.css';
import '../../css/q/qe9yvo0vy.css';
import '../../css/m/muklbzmzj.css';
import '../../css/v/vhw-dcrmv.css';
import '../../css/w/wwo90qb4j.css';
import '../../css/d/dissmdbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcAASoG3M" x1="10" x2="14" y1="5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="szlwnymgj wm-k"/><path class="wm-deco xs1u29b9i"/><path class="qe9yvo0vy wm-k"/><path fill="url(#SVGcAASoG3M)" class="muklbzmzj wm-k"/><path class="vhw-dcrmv wm-shadow"/><path class="wm-shine wwo90qb4j"/><path class="dissmdbtp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:avatar-dog"} {...others} />);
}

export default Component;

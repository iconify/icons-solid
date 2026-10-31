import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/v/viinn2dlk.css';
import '../../css/x/x0hj87b_h.css';
import '../../css/r/r8tu8hbmg.css';
import '../../css/y/yr-_16joo.css';
import '../../css/m/mx66r9q5s.css';
import '../../css/d/d2v3pzbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG2IiWn1Oe" cx="4.49" cy="7" r="20.35" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="viinn2dlk wm-shadow"/><path fill="url(#SVG2IiWn1Oe)" class="wm-k x0hj87b_h"/><path class="r8tu8hbmg wm-shine"/><path class="wm-s yr-_16joo"/><path class="mx66r9q5s wm-deco"/><path class="d2v3pzbqm wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:user-star"} {...others} />);
}

export default Component;

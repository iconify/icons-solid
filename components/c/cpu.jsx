import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qwj6qhbut.css';
import '../../css/e/e46dpw38j.css';
import '../../css/d/dh0vncb2u.css';
import '../../css/v/v_rklo6ku.css';
import '../../css/h/haox0ab-x.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/t/t1kdfjbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGssztEN0r" cx="7.42" cy="6.18" r="26.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="qwj6qhbut wm-shadow"/><path fill="url(#SVGssztEN0r)" class="e46dpw38j wm-k"/><path class="dh0vncb2u wm-k"/><path class="v_rklo6ku wm-k"/><path class="haox0ab-x wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="t1kdfjbwj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:cpu"} {...others} />);
}

export default Component;

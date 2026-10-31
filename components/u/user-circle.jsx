import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/r/rssgjobrb.css';
import '../../css/f/fpwch3b-z.css';
import '../../css/z/zpr17mbgj.css';
import '../../css/h/hpscw11mn.css';
import '../../css/d/d03rqeb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6cgg4cHL" cx="8" cy="6.5" r="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="rssgjobrb wm-shadow"/><path fill="url(#SVG6cgg4cHL)" class="fpwch3b-z wm-k"/><path fill="url(#SVG6cgg4cHL)" class="wm-k zpr17mbgj"/><path class="hpscw11mn wm-shine"/><path class="d03rqeb8n wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:user-circle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/l/lvmdou8ng.css';
import '../../css/p/p1fi3ktuy.css';
import '../../css/f/fn5_xcngd.css';
import '../../css/s/s1qboq62h.css';
import '../../css/w/wa5i6sbck.css';
import '../../css/d/ds5w98xjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG5W8Mce1c" cx="7.2" cy="6.46" r="26.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="lvmdou8ng wm-shadow"/><path fill="url(#SVG5W8Mce1c)" class="p1fi3ktuy wm-k"/><path class="fn5_xcngd wm-shine"/><path class="s1qboq62h wm-s"/><path class="wa5i6sbck wm-deco"/><path class="ds5w98xjs wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:git-pull-request-closed"} {...others} />);
}

export default Component;

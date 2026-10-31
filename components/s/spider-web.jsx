import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/j/jvi-tou7n.css';
import '../../css/i/irvj0ovgz.css';
import '../../css/g/gs9fasbkd.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/q/q1wlx_g3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG8A4SbdLE" cx="7.86" cy="5.9" r="25.91" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="jvi-tou7n wm-shadow"/><path fill="url(#SVG8A4SbdLE)" class="irvj0ovgz wm-k"/><path class="gs9fasbkd wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="q1wlx_g3k wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:spider-web"} {...others} />);
}

export default Component;

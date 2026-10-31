import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/j/j3mmloojm.css';
import '../../css/k/knd7r8bbm.css';
import '../../css/u/u297nvutj.css';
import '../../css/h/hb2bmgb8s.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG2PHEibvx" cx="7.72" cy="8.47" r="20.52" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="j3mmloojm wm-shadow"/><path fill="url(#SVG2PHEibvx)" class="knd7r8bbm wm-k"/><path class="u297nvutj wm-shine"/><path class="hb2bmgb8s wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:rewind"} {...others} />);
}

export default Component;

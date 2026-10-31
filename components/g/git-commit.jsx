import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/d/d1zkwrb6d.css';
import '../../css/f/f8ew1bcjz.css';
import '../../css/q/quml_gbkh.css';
import '../../css/m/mx66r9q5s.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGEEq0Ad9t" cx="7.42" cy="9.26" r="20.69" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="d1zkwrb6d wm-shadow"/><path fill="url(#SVGEEq0Ad9t)" class="f8ew1bcjz wm-k"/><path class="quml_gbkh wm-shine"/><path class="mx66r9q5s wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:git-commit"} {...others} />);
}

export default Component;

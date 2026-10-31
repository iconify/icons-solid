import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/f/fsvo7sfoy.css';
import '../../css/f/fp6hrmb6q.css';
import '../../css/g/g728orbyz.css';
import '../../css/m/mx66r9q5s.css';
import '../../css/d/d2v3pzbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG71w49c0J" cx="8.14" cy="6.85" r="24.89" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="fsvo7sfoy wm-shadow"/><path fill="url(#SVG71w49c0J)" class="fp6hrmb6q wm-k"/><path class="g728orbyz wm-shine"/><path class="mx66r9q5s wm-deco"/><path class="d2v3pzbqm wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:playground"} {...others} />);
}

export default Component;

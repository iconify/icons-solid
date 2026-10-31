import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qqojqabrr.css';
import '../../css/q/qyn-lwbix.css';
import '../../css/l/lpd0q9new.css';
import '../../css/e/ej1d-tbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG9Sa0OeMn" cx="7.4" cy="8.14" r="21.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="qqojqabrr wm-shadow"/><path fill="url(#SVG9Sa0OeMn)" class="qyn-lwbix wm-k"/><path class="lpd0q9new wm-k"/><path class="ej1d-tbxh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:dholak"} {...others} />);
}

export default Component;

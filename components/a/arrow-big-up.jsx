import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/p/pk2s4mbhl.css';
import '../../css/j/j1eqalvef.css';
import '../../css/k/kxq1gsbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGXWDDUcps" cx="7.64" cy="6.07" r="25.52" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="pk2s4mbhl wm-shadow"/><path fill="url(#SVGXWDDUcps)" class="j1eqalvef wm-k"/><path class="kxq1gsbwn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:arrow-big-up"} {...others} />);
}

export default Component;

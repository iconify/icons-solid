import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/k/kgyho1b4a.css';
import '../../css/s/skmhdst9q.css';
import '../../css/f/ftphttbud.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/x/x_0bwwd3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGZhU8NwZS" cx="7.2" cy="7.13" r="25.62" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="kgyho1b4a wm-shadow"/><path fill="url(#SVGZhU8NwZS)" class="skmhdst9q wm-k"/><path class="ftphttbud wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="wm-deco x_0bwwd3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:switch-camera"} {...others} />);
}

export default Component;

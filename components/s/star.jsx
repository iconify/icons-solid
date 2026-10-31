import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/e/e69zp363c.css';
import '../../css/s/skbfp7ecv.css';
import '../../css/m/mh22xjbtv.css';
import '../../css/d/d-8rgjxpg.css';
import '../../css/i/i0itsu56j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGVgbEadSn" cx="7.38" cy="6.4" r="26.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="e69zp363c wm-shadow"/><path fill="url(#SVGVgbEadSn)" class="skbfp7ecv wm-k"/><path class="mh22xjbtv wm-shine"/><path class="d-8rgjxpg wm-deco"/><path class="i0itsu56j wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:star"} {...others} />);
}

export default Component;

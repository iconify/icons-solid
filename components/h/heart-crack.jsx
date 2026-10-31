import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/g/g5v8m4b3y.css';
import '../../css/i/isc5l5bhm.css';
import '../../css/n/nl-eqx4rx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxg7TMc9a" cx="7.64" cy="7.1" r="24.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="g5v8m4b3y wm-shadow"/><path fill="url(#SVGxg7TMc9a)" class="isc5l5bhm wm-k"/><path class="nl-eqx4rx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:heart-crack"} {...others} />);
}

export default Component;

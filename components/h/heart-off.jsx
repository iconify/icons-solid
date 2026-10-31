import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/f/f234cc5nq.css';
import '../../css/a/awb1jpbss.css';
import '../../css/n/np_kl38nm.css';
import '../../css/p/p7shhrbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnreWddSd" cx="7.64" cy="7.13" r="24.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="f234cc5nq wm-shadow"/><path fill="url(#SVGnreWddSd)" class="awb1jpbss wm-k"/><path class="np_kl38nm wm-shine"/><path class="p7shhrbbj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:heart-off"} {...others} />);
}

export default Component;

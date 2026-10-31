import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/p/py6nss6un.css';
import '../../css/k/knccs3bsj.css';
import '../../css/j/jrhej1u-o.css';
import '../../css/l/luqimub3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGx0Xyverc" cx="8.96" cy="6.18" r="22.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="py6nss6un wm-shadow"/><path fill="url(#SVGx0Xyverc)" class="knccs3bsj wm-k"/><path class="jrhej1u-o wm-shine"/><path class="luqimub3u wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:smartphone-charging"} {...others} />);
}

export default Component;

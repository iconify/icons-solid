import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/t/tm8_4cc_q.css';
import '../../css/y/y0czkzblm.css';
import '../../css/n/ngl_vvuda.css';
import '../../css/o/osmrkv0ch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxpzDbenL" cx="8.08" cy="6.18" r="24.64" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="tm8_4cc_q wm-shadow"/><path fill="url(#SVGxpzDbenL)" class="wm-k y0czkzblm"/><path class="ngl_vvuda wm-shine"/><path class="osmrkv0ch wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:database-zap"} {...others} />);
}

export default Component;

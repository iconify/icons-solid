import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/i/irn2a2-fm.css';
import '../../css/m/mka7s2ugt.css';
import '../../css/t/tb7o3mb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGQbsRfcST" cx="3" cy="3" r="24" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".15" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="irn2a2-fm wm-shadow"/><path fill="url(#SVGQbsRfcST)" class="mka7s2ugt wm-k"/><path class="tb7o3mb7s wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:align-justify"} {...others} />);
}

export default Component;

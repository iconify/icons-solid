import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/s/sd5a7etru.css';
import '../../css/o/on8wrqblt.css';
import '../../css/e/e4481zokj.css';
import '../../css/y/y32zgeb-v.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/n/nqrq7rbor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGssztEN0r" cx="7.42" cy="6.18" r="26.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="sd5a7etru wm-shadow"/><path fill="url(#SVGssztEN0r)" class="on8wrqblt wm-k"/><path class="e4481zokj wm-k"/><path class="wm-shine y32zgeb-v"/><path class="gyytzlc5m wm-deco"/><path class="nqrq7rbor wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:aperture"} {...others} />);
}

export default Component;

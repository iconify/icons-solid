import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9jw2obzx.css';
import '../../css/t/tr0fwwk_h.css';
import '../../css/o/oesstzbre.css';
import '../../css/k/k3bf_kk4e.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGWJ2w5dul" x1="195.6" x2="363.6" y1="218.9" y2="379.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="h9jw2obzx"/><stop offset="1" class="tr0fwwk_h"/></linearGradient><path fill="url(#SVGWJ2w5dul)" class="oesstzbre"/><path class="k3bf_kk4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptime-kuma"} {...others} />);
}

export default Component;

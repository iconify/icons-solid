import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd-bvyq5o.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/m/muk_sco2e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pd-bvyq5o"/><linearGradient id="SVGqg9L2bxs" x1="197.808" x2="313.942" y1="197.22" y2="314.528" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVGqg9L2bxs)" class="muk_sco2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pve-notebuddy-dark"} {...others} />);
}

export default Component;

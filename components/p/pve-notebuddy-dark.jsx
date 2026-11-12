import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5ag-hqvn.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/m/muk_sco2e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5ag-hqvn"/><linearGradient id="SVGhnntzbDF" x1="197.8" x2="313.9" y1="197.2" y2="314.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVGhnntzbDF)" class="muk_sco2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pve-notebuddy-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqz7flb0x.css';
import '../../css/t/t245-n7sy.css';
import '../../css/f/fmy343bps.css';
import '../../css/t/twzrj5eht.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGM6gyfbBC" x1="189.1" x2="296.8" y1="192.4" y2="381" gradientUnits="userSpaceOnUse"><stop offset="0" class="vqz7flb0x"/><stop offset="1" class="t245-n7sy"/></linearGradient><path fill="url(#SVGM6gyfbBC)" class="fmy343bps"/><linearGradient id="SVGJw73wdsm" x1="130.6" x2="241.6" y1="-11.6" y2="182.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="vqz7flb0x"/><stop offset="1" class="t245-n7sy"/></linearGradient><path fill="url(#SVGJw73wdsm)" class="twzrj5eht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plausible"} {...others} />);
}

export default Component;

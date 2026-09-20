import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqz7flb0x.css';
import '../../css/t/t245-n7sy.css';
import '../../css/f/fmy343bps.css';
import '../../css/t/twzrj5eht.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGcy95AgrO" x1="189.056" x2="296.848" y1="470.428" y2="659.063" gradientTransform="translate(0 -278.024)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vqz7flb0x"/><stop offset="1" class="t245-n7sy"/></linearGradient><path fill="url(#SVGcy95AgrO)" class="fmy343bps"/><linearGradient id="SVGjYVYSdaH" x1="130.554" x2="241.634" y1="266.456" y2="460.846" gradientTransform="translate(0 -278.024)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vqz7flb0x"/><stop offset="1" class="t245-n7sy"/></linearGradient><path fill="url(#SVGjYVYSdaH)" class="twzrj5eht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plausible"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxg55wcez.css';
import '../../css/r/r819d5bvv.css';
import '../../css/w/w3a302kie.css';
import '../../css/s/s585m_b3o.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGEayy58rm" x1="12.469" x2="1432.842" y1="366.805" y2="-1054.123" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wxg55wcez"/><stop offset="1" class="r819d5bvv"/></linearGradient><path fill="url(#SVGEayy58rm)" class="w3a302kie"/><path class="s585m_b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-home"} {...others} />);
}

export default Component;

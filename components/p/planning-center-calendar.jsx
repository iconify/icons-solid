import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trbz02ocy.css';
import '../../css/w/wnkvud7ko.css';
import '../../css/f/fesr6pspg.css';
import '../../css/t/t2-qfwbnh.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG6HfdAdsm" x1="201.523" x2="1225.504" y1="177.485" y2="-846.496" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="trbz02ocy"/><stop offset="1" class="wnkvud7ko"/></linearGradient><path fill="url(#SVG6HfdAdsm)" class="fesr6pspg"/><path class="t2-qfwbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-calendar"} {...others} />);
}

export default Component;

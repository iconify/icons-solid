import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3v1k4b1v.css';
import '../../css/e/e75uw-rln.css';
import '../../css/s/susufzvox.css';
import '../../css/n/n3-ydgbuy.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGpM1IYbQL" cx="-10.488" cy="648.364" r="24.381" gradientTransform="rotate(45.7 -9728.518 -3411.711)scale(12.33 -12.33)" gradientUnits="userSpaceOnUse"><stop offset=".33" class="m3v1k4b1v"/><stop offset="1" class="e75uw-rln"/></radialGradient><path fill="url(#SVGpM1IYbQL)" class="susufzvox"/><path class="n3-ydgbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:signoz"} {...others} />);
}

export default Component;

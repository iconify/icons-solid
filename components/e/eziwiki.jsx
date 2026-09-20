import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz00z2k7d.css';
import '../../css/z/z-wj5t2su.css';
import '../../css/s/szo_s3b2s.css';
import '../../css/l/l1hypqbxj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGe0AT1gky" x1="-695.97" x2="-690.85" y1="794.17" y2="789.05" gradientTransform="matrix(100 0 0 -100 69597 79417)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wz00z2k7d"/><stop offset="1" class="z-wj5t2su"/></linearGradient><path fill="url(#SVGe0AT1gky)" class="szo_s3b2s"/><path class="l1hypqbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eziwiki"} {...others} />);
}

export default Component;

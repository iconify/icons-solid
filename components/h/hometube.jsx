import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-wj5t2su.css';
import '../../css/e/enp_a8bci.css';
import '../../css/s/susufzvox.css';
import '../../css/e/e08hu1b9f.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGemjuJcYW" x1="-695.97" x2="-690.85" y1="794.17" y2="789.05" gradientTransform="matrix(100 0 0 -100 69597 79417)" gradientUnits="userSpaceOnUse"><stop offset="0" class="z-wj5t2su"/><stop offset="1" class="enp_a8bci"/></linearGradient><path fill="url(#SVGemjuJcYW)" class="susufzvox"/><path class="e08hu1b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hometube"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az80nsbwv.css';
import '../../css/o/or6_3ibjh.css';
import '../../css/s/susufzvox.css';
import '../../css/t/trbuzfbhh.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGGu15LTmv" x1="-695.97" x2="-690.85" y1="794.17" y2="789.05" gradientTransform="matrix(100 0 0 -100 69597 79417)" gradientUnits="userSpaceOnUse"><stop offset="0" class="az80nsbwv"/><stop offset="1" class="or6_3ibjh"/></linearGradient><path fill="url(#SVGGu15LTmv)" class="susufzvox"/><path class="trbuzfbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:relic-storage"} {...others} />);
}

export default Component;

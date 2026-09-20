import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q2c3u1btc.css';
import '../../css/t/t0_3emlbr.css';
import '../../css/t/tv4-78bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="q2c3u1btc"/><path class="t0_3emlbr"/><path class="tv4-78bvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-play-sharp-two-tone"} {...others} />);
}

export default Component;

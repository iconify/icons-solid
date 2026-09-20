import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e48ledu_g.css';
import '../../css/k/k6sgsiwcv.css';
import '../../css/a/ad99r3bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e48ledu_g"/><path class="k6sgsiwcv"/><path class="ad99r3bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-line-broken"} {...others} />);
}

export default Component;

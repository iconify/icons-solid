import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzcwl_bnx.css';
import '../../css/r/r-64orvcz.css';
import '../../css/t/t7ng8sbqd.css';
import '../../css/h/hq-ct_ynv.css';
import '../../css/i/ip8x97bwo.css';
import '../../css/t/thf7ybcvq.css';
import '../../css/l/lyh3mqbjq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nzcwl_bnx"/><path class="r-64orvcz"/><path class="t7ng8sbqd"/><path class="hq-ct_ynv"/><path class="ip8x97bwo"/><path class="thf7ybcvq"/><path class="lyh3mqbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:microphone-2-pop"} {...others} />);
}

export default Component;

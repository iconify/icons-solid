import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po2-gibeb.css';
import '../../css/x/xekslbcda.css';
import '../../css/h/hwedlv4hb.css';
import '../../css/i/iamdr0brd.css';
import '../../css/x/x039x8bfp.css';
import '../../css/d/dxhthunma.css';
import '../../css/q/qm8tribda.css';
import '../../css/p/pn78jjbbj.css';
import '../../css/k/k3g40ybgi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="po2-gibeb"/><path class="xekslbcda"/><path class="hwedlv4hb"/><path class="iamdr0brd"/><path class="x039x8bfp"/><path class="dxhthunma"/><path class="qm8tribda"/><path class="pn78jjbbj"/><path class="k3g40ybgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:crystal-ball-2"} {...others} />);
}

export default Component;

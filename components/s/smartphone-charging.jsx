import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vijmxqbnc.css';
import '../../css/m/mcp0rubtl.css';
import '../../css/k/kk82o511u.css';
import '../../css/u/ueozmrb6b.css';
import '../../css/z/zdets1t5w.css';
import '../../css/l/lebaaqfhq.css';
import '../../css/i/ihg1qtbsj.css';
import '../../css/e/e9d8yz2cc.css';
import '../../css/v/vbpnnd_jl.css';
import '../../css/g/gheigybjw.css';
import '../../css/i/it2b74bol.css';
import '../../css/o/ouf3xhbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vijmxqbnc wm-shadow"/><path class="mcp0rubtl wm-k"/><path class="kk82o511u wm-k"/><path class="ueozmrb6b wm-k"/><path class="wm-k zdets1t5w"/><path class="lebaaqfhq wm-shine"/><path class="ihg1qtbsj wm-k"/><path class="e9d8yz2cc wm-s"/><path class="vbpnnd_jl wm-s"/><path class="gheigybjw wm-s"/><path class="it2b74bol wm-s"/><path class="ouf3xhbdp wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:smartphone-charging"} {...others} />);
}

export default Component;

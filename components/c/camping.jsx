import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kogo6swwh.css';
import '../../css/m/muqx_rb4a.css';
import '../../css/d/dcvk1qzxm.css';
import '../../css/k/kd-9y2hnw.css';
import '../../css/f/feqz8zbyh.css';
import '../../css/x/xmxhvjcpc.css';
import '../../css/s/s0v566tts.css';
import '../../css/y/ytda-0b0u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kogo6swwh"/><path class="muqx_rb4a"/><path class="dcvk1qzxm"/><path class="kd-9y2hnw"/><path class="feqz8zbyh"/><path class="xmxhvjcpc"/><path class="s0v566tts"/><path class="ytda-0b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:camping"} {...others} />);
}

export default Component;

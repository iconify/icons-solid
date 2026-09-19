import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptp-sctlm.css';
import '../../css/v/vx-b6wt5v.css';
import '../../css/f/fa8k6ybxx.css';
import '../../css/q/qacc537nh.css';
import '../../css/p/pwddzki1c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ptp-sctlm"/><path class="vx-b6wt5v"/><path class="fa8k6ybxx"/><path class="qacc537nh"/><path class="pwddzki1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:slack-wordmark"} {...others} />);
}

export default Component;

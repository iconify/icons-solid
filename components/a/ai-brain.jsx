import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fyyo_q0fc.css';
import '../../css/q/q36fm162k.css';
import '../../css/t/tb3tliybk.css';
import '../../css/y/yhvfzz-kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fyyo_q0fc"/><path class="q36fm162k"/><path class="tb3tliybk"/><path class="yhvfzz-kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-brain"} {...others} />);
}

export default Component;

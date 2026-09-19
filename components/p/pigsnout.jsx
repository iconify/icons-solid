import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9wy8vbyy.css';
import '../../css/q/qbotcdkoh.css';
import '../../css/r/rcv83i2oj.css';
import '../../css/h/hddayxb0e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9wy8vbyy"/><path class="qbotcdkoh"/><path class="rcv83i2oj"/><path class="hddayxb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pigsnout"} {...others} />);
}

export default Component;

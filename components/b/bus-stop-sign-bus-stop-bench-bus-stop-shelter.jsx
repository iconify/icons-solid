import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3p8q1brp.css';
import '../../css/x/xk0-y0bcj.css';
import '../../css/q/qv0m_7bit.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r3p8q1brp"/><path class="xk0-y0bcj"/><path class="qv0m_7bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bus-stop-sign-bus-stop-bench-bus-stop-shelter"} {...others} />);
}

export default Component;

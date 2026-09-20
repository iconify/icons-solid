import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qott1hmiq.css';
import '../../css/d/djdd7-5fn.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="qott1hmiq"/><path class="djdd7-5fn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:message-writing"} {...others} />);
}

export default Component;

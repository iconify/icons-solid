import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_67od41a.css';
import '../../css/j/jhuhxq2cd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q_67od41a"/><path class="jhuhxq2cd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:microphone"} {...others} />);
}

export default Component;

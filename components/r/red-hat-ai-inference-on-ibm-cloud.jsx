import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8_e15b-a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q8_e15b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:red-hat-ai-inference-on-ibm-cloud"} {...others} />);
}

export default Component;

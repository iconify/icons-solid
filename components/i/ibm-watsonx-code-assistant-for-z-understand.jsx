import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j68inccny.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j68inccny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watsonx-code-assistant-for-z-understand"} {...others} />);
}

export default Component;

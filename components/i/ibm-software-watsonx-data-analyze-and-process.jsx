import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4_b-eaap.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t4_b-eaap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-software-watsonx-data-analyze-and-process"} {...others} />);
}

export default Component;

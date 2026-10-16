import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkemah_ob.css';
import '../../css/k/kxu75d5ai.css';
import '../../css/c/ca5g-fnfs.css';

const viewBox = {"width":250,"height":250};
const content = `<g class="vkemah_ob"><path class="kxu75d5ai"/><path class="ca5g-fnfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:llama-cpp-server"} {...others} />);
}

export default Component;

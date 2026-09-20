import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hrkk-ojzk.css';
import '../../css/v/vkeso3bgp.css';
import '../../css/v/vi1s4bwnk.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hrkk-ojzk"/><path class="vkeso3bgp"/><path class="vi1s4bwnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:decent-work-and-economic-growth-flat"} {...others} />);
}

export default Component;

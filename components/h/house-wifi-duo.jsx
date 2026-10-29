import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gunbq9btm.css';
import '../../css/y/yew85ogsc.css';
import '../../css/a/azlmfgbpz.css';
import '../../css/v/vu-t8mz1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gunbq9btm"/><path class="wm-a yew85ogsc"/><path class="azlmfgbpz"/><path class="vu-t8mz1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:house-wifi-duo"} {...others} />);
}

export default Component;

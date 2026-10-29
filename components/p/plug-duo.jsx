import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f912b9wmg.css';
import '../../css/c/cgczxwbbg.css';
import '../../css/h/hqgq3dbge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f912b9wmg"/><path class="cgczxwbbg wm-a"/><path class="hqgq3dbge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plug-duo"} {...others} />);
}

export default Component;

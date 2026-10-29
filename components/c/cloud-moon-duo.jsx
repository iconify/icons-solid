import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ymyxtyy4a.css';
import '../../css/n/nms9a0b0c.css';
import '../../css/z/zbgyb8bwb.css';
import '../../css/x/xw85vjb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ymyxtyy4a"/><path class="nms9a0b0c wm-a"/><path class="wm-a zbgyb8bwb"/><path class="xw85vjb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-moon-duo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h65e0tmly.css';
import '../../css/s/s53tgbb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h65e0tmly"/><path class="s53tgbb5w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:split"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vh4_jvb7b.css';
import '../../css/j/jofkexr8t.css';
import '../../css/y/y4nh-g7yf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vh4_jvb7b"/><path class="jofkexr8t"/><path class="wm-a y4nh-g7yf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mehndi-hand"} {...others} />);
}

export default Component;

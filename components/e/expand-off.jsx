import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkzaizbed.css';
import '../../css/p/peqjldbmx.css';
import '../../css/q/q4l54cb7c.css';
import '../../css/m/m-kwq4bxb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="jkzaizbed"/><path class="peqjldbmx"/><path class="q4l54cb7c"/><path class="m-kwq4bxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:expand-off"} {...others} />);
}

export default Component;

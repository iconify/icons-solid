import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qnoiozbas.css';
import '../../css/l/lqbglmh9l.css';
import '../../css/g/gpdgasbvb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qnoiozbas"/><path class="lqbglmh9l"/><path class="gpdgasbvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-health-worker"} {...others} />);
}

export default Component;

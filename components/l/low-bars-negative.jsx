import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t88j5qbod.css';
import '../../css/g/g4jfx9s0y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="t88j5qbod"/><path clip-rule="evenodd" class="g4jfx9s0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:low-bars-negative"} {...others} />);
}

export default Component;

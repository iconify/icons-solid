import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4l7b9bzv.css';
import '../../css/o/ox011_f-g.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="e4l7b9bzv"/><path clip-rule="evenodd" class="ox011_f-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:battery-50-20-solid"} {...others} />);
}

export default Component;

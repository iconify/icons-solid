import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy9rdbuvy.css';
import '../../css/t/tj0h6ru8e.css';
import '../../css/w/w1_y2vige.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qy9rdbuvy"/><path class="tj0h6ru8e"/><path class="w1_y2vige"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-outline"} {...others} />);
}

export default Component;

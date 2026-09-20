import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5723789x.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/ucxixg8jo.css';
import '../../css/r/rl4sfbcqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r5723789x"/><g class="mc2zb0bvp"><path class="ucxixg8jo"/><path class="rl4sfbcqv"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-down-left-bold-duotone"} {...others} />);
}

export default Component;

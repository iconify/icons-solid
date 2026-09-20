import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4flpqb4t.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rt40puy8t.css';
import '../../css/m/m8ow94bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w4flpqb4t"/><g class="mc2zb0bvp"><path class="rt40puy8t"/><path class="m8ow94bvr"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:city-bold-duotone"} {...others} />);
}

export default Component;

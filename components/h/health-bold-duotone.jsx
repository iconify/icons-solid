import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/doni66b_x.css';
import '../../css/g/g6a2i5bza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="doni66b_x"/><path clip-rule="evenodd" class="g6a2i5bza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:health-bold-duotone"} {...others} />);
}

export default Component;

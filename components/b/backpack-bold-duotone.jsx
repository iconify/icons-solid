import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9p1ohbtx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/l0cxmccps.css';
import '../../css/v/vpf4mac0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h9p1ohbtx"/><g class="mc2zb0bvp"><path class="l0cxmccps"/><path class="vpf4mac0n"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backpack-bold-duotone"} {...others} />);
}

export default Component;

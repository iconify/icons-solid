import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjsovkbka.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wj0sbvbpy.css';
import '../../css/x/xn05bwh0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zjsovkbka"/><g class="mc2zb0bvp"><path class="wj0sbvbpy"/><path class="xn05bwh0o"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-3-bold-duotone"} {...others} />);
}

export default Component;

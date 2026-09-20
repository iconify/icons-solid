import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo9ighbht.css';
import '../../css/p/p4kgcfb0d.css';
import '../../css/u/uxcvcibju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jo9ighbht"/><path class="p4kgcfb0d"/><path class="uxcvcibju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-roll-bold-duotone"} {...others} />);
}

export default Component;

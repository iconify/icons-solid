import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w62ongbbh.css';
import '../../css/c/c0glxfolk.css';
import '../../css/x/xwbhyn8-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w62ongbbh"/><path class="c0glxfolk"/><path class="xwbhyn8-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-down-bold-duotone"} {...others} />);
}

export default Component;

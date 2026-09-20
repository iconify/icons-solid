import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub6dtb6xc.css';
import '../../css/j/jejzw4uym.css';
import '../../css/p/poyhot0um.css';
import '../../css/z/z2ntfxdat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ub6dtb6xc"/><path class="jejzw4uym"/><path class="poyhot0um"/><path class="z2ntfxdat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-2-bold-duotone"} {...others} />);
}

export default Component;

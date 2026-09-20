import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q69zxwbhz.css';
import '../../css/p/poyhot0um.css';
import '../../css/z/z2ntfxdat.css';
import '../../css/u/ub6dtb6xc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q69zxwbhz"/><path class="poyhot0um"/><path class="z2ntfxdat"/><path class="ub6dtb6xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bold-duotone"} {...others} />);
}

export default Component;

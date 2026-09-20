import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/algz9sbaz.css';
import '../../css/u/u334qkbzc.css';
import '../../css/b/bve6fnunb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="algz9sbaz"/><path clip-rule="evenodd" class="u334qkbzc"/><path class="bve6fnunb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-minimalistic-horizontal-outline"} {...others} />);
}

export default Component;

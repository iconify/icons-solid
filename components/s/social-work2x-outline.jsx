import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_g-mnblg.css';
import '../../css/p/pe4zbubez.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="l_g-mnblg"/><path clip-rule="evenodd" class="pe4zbubez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:social-work2x-outline"} {...others} />);
}

export default Component;

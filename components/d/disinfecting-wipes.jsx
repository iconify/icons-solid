import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2inmo5zg.css';
import '../../css/b/bc7uu5x5e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="w2inmo5zg"/><path clip-rule="evenodd" class="bc7uu5x5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:disinfecting-wipes"} {...others} />);
}

export default Component;

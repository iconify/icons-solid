import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/warkggbvp.css';
import '../../css/n/nc955vbly.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="warkggbvp"/><path class="nc955vbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:smoking-cessation-outline"} {...others} />);
}

export default Component;

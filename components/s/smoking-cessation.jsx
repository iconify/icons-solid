import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fe9zxptfy.css';
import '../../css/n/nc955vbly.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="fe9zxptfy"/><path class="nc955vbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:smoking-cessation"} {...others} />);
}

export default Component;

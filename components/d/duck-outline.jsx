import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2pe5kl1o.css';
import '../../css/t/tf2f5sqyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="s2pe5kl1o"/><path clip-rule="evenodd" class="tf2f5sqyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:duck-outline"} {...others} />);
}

export default Component;

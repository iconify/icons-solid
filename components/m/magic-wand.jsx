import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yf-vi4rlm.css';
import '../../css/w/w2nnsxoro.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="yf-vi4rlm"/><path clip-rule="evenodd" class="w2nnsxoro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:magic-wand"} {...others} />);
}

export default Component;

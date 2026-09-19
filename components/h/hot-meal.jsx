import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btwg08bfy.css';
import '../../css/i/iu_q38bvn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="btwg08bfy"/><path clip-rule="evenodd" class="iu_q38bvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hot-meal"} {...others} />);
}

export default Component;

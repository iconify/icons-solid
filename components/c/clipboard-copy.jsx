import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuxogyeok.css';
import '../../css/z/zgrfc0b6p.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="wuxogyeok"/><path class="zgrfc0b6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:clipboard-copy"} {...others} />);
}

export default Component;

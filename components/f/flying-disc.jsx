import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njrty1biu.css';
import '../../css/w/w_zr9qbuu.css';
import '../../css/e/e4id5irvz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="njrty1biu"/><path class="w_zr9qbuu"/><path class="e4id5irvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:flying-disc"} {...others} />);
}

export default Component;

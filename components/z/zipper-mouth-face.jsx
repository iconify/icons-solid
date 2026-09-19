import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p50o02hqx.css';
import '../../css/o/ousdnsbjs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="p50o02hqx"/><path class="ousdnsbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:zipper-mouth-face"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tl70p-b9i.css';
import '../../css/s/s_zh_6b-p.css';
import '../../css/z/z-46yngir.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tl70p-b9i"/><path class="s_zh_6b-p"/><path class="z-46yngir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:linked-paperclips"} {...others} />);
}

export default Component;

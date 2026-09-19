import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/in9-i15aj.css';
import '../../css/k/kjsvfybrp.css';
import '../../css/q/q11o5ac5x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="in9-i15aj"/><path class="kjsvfybrp"/><path class="q11o5ac5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-elf"} {...others} />);
}

export default Component;

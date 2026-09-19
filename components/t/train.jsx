import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qz7j31bti.css';
import '../../css/i/ibo-jhcqp.css';
import '../../css/d/dr_exnh7z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qz7j31bti"/><path clip-rule="evenodd" class="ibo-jhcqp"/><path class="dr_exnh7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:train"} {...others} />);
}

export default Component;

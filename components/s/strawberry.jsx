import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vobjtx-yk.css';
import '../../css/f/ftydvcc7r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vobjtx-yk"/><path class="ftydvcc7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:strawberry"} {...others} />);
}

export default Component;

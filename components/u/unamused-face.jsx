import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9orncbbx.css';
import '../../css/l/lvh0zsbby.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="z9orncbbx"/><path class="lvh0zsbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:unamused-face"} {...others} />);
}

export default Component;

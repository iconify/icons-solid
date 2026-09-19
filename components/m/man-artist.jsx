import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_np3ukdd.css';
import '../../css/d/ds3iw5z2y.css';
import '../../css/w/w4opac-us.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="b_np3ukdd"/><path class="ds3iw5z2y"/><path class="w4opac-us"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-artist"} {...others} />);
}

export default Component;

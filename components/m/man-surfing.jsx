import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9_nnybaf.css';
import '../../css/f/f1ukll13h.css';
import '../../css/b/bpiftrb4i.css';
import '../../css/e/eoer0xs2e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="c9_nnybaf"/><path class="f1ukll13h"/><path class="bpiftrb4i"/><path class="eoer0xs2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-surfing"} {...others} />);
}

export default Component;

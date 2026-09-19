import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxixqi9lj.css';
import '../../css/a/a_f2-5b8t.css';
import '../../css/r/r-w7cxbpy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kxixqi9lj"/><path class="a_f2-5b8t"/><path class="r-w7cxbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-scientist"} {...others} />);
}

export default Component;

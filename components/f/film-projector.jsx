import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_31yxbfj.css';
import '../../css/k/k0rbv5bij.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="a_31yxbfj"/><path class="k0rbv5bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:film-projector"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eti-kubql.css';
import '../../css/x/x1v6wzlrz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="eti-kubql"/><path class="x1v6wzlrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:rat"} {...others} />);
}

export default Component;

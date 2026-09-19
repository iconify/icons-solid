import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_yipyb-q.css';
import '../../css/y/ylgk8tbzc.css';
import '../../css/v/v5qiw5-fn.css';
import '../../css/g/gfl53sb3x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="o_yipyb-q"/><path class="ylgk8tbzc"/><path class="v5qiw5-fn"/><path class="gfl53sb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-astronaut"} {...others} />);
}

export default Component;

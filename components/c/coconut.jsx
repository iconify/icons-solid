import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oy86dqb1h.css';
import '../../css/t/t96wzr0rp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="oy86dqb1h"/><path class="t96wzr0rp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:coconut"} {...others} />);
}

export default Component;

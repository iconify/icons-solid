import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pt-lo5-fy.css';
import '../../css/k/k6cm-uc4x.css';
import '../../css/y/y78f-q27q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pt-lo5-fy"/><path class="k6cm-uc4x"/><path class="y78f-q27q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pregnant-person"} {...others} />);
}

export default Component;

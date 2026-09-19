import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpo1cub5o.css';
import '../../css/t/t4-8m-yws.css';
import '../../css/q/q1kaljbyg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="hpo1cub5o"/><path class="t4-8m-yws"/><path class="q1kaljbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-mechanic"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qelwoea_p.css';
import '../../css/e/e-0bb14df.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qelwoea_p"/><path class="e-0bb14df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:fuel-pump"} {...others} />);
}

export default Component;

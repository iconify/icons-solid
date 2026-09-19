import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8d9fabdg.css';
import '../../css/l/l5hrumb6n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="h8d9fabdg"/><path class="l5hrumb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:vertical-traffic-light"} {...others} />);
}

export default Component;

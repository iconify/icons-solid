import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4y99l5yb.css';
import '../../css/l/lgalvchew.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="m4y99l5yb"/><path class="lgalvchew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:articulated-lorry"} {...others} />);
}

export default Component;

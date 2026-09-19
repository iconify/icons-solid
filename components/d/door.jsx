import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d77b2ib9v.css';
import '../../css/g/gv6bzv2xb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="d77b2ib9v"/><path class="gv6bzv2xb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:door"} {...others} />);
}

export default Component;

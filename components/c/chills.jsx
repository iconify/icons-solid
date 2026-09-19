import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/falrj6b-v.css';
import '../../css/m/m7fafxb8d.css';
import '../../css/d/dxfu67mcg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="falrj6b-v"/><path class="m7fafxb8d"/><path clip-rule="evenodd" class="dxfu67mcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chills"} {...others} />);
}

export default Component;

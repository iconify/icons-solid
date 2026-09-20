import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxjm8ebzj.css';
import '../../css/k/kp0_j35as.css';
import '../../css/l/l04og0udn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dxjm8ebzj"/><path class="kp0_j35as"/><path clip-rule="evenodd" class="l04og0udn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dollar-bold"} {...others} />);
}

export default Component;

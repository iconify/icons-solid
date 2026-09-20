import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erpmo6bnm.css';
import '../../css/x/xvjqgobjy.css';
import '../../css/k/kx3o_bcjy.css';
import '../../css/j/j22c2bb7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="erpmo6bnm"/><path clip-rule="evenodd" class="xvjqgobjy"/><path class="kx3o_bcjy"/><path class="j22c2bb7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-minimalistic-bold-duotone"} {...others} />);
}

export default Component;

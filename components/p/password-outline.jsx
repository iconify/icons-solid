import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kok0_rbdc.css';
import '../../css/p/pwxr7hcud.css';
import '../../css/a/aj-1nccta.css';
import '../../css/c/cj59lz24r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kok0_rbdc"/><path class="pwxr7hcud"/><path class="aj-1nccta"/><path clip-rule="evenodd" class="cj59lz24r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-outline"} {...others} />);
}

export default Component;

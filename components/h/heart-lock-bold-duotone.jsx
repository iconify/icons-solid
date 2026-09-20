import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0nbc90lp.css';
import '../../css/z/zs6l8u0uh.css';
import '../../css/k/kk8cc_bez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k0nbc90lp"/><path class="zs6l8u0uh"/><path class="kk8cc_bez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-lock-bold-duotone"} {...others} />);
}

export default Component;

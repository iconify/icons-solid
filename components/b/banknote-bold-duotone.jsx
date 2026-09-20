import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwzadmbzz.css';
import '../../css/i/ikjivy1kl.css';
import '../../css/y/yaqpnvgfb.css';
import '../../css/a/a2owrl2nd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nwzadmbzz"/><path class="ikjivy1kl"/><path class="yaqpnvgfb"/><path clip-rule="evenodd" class="a2owrl2nd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u08pe7bcz.css';
import '../../css/j/j38dswy6b.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="u08pe7bcz"/><path class="j38dswy6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:shopping-cart-plus-duotone"} {...others} />);
}

export default Component;

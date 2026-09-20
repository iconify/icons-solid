import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rh_tk0k0z.css';
import '../../css/z/zw-zdnb-k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="rh_tk0k0z"/><path clip-rule="evenodd" class="zw-zdnb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:moon"} {...others} />);
}

export default Component;

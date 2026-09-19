import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzyf703yp.css';
import '../../css/g/ga6-g0bxk.css';
import '../../css/k/khcn0solk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="uzyf703yp"/><path class="ga6-g0bxk"/><path class="khcn0solk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:shallow-pan-of-food"} {...others} />);
}

export default Component;

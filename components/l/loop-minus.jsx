import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0m1_x3ck.css';
import '../../css/a/amhu66bwq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0m1_x3ck"/><path class="amhu66bwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:loop-minus"} {...others} />);
}

export default Component;

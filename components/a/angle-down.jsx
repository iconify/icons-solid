import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xri9hmb6b.css';
import '../../css/k/klchnxb0j.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="xri9hmb6b"/><path class="klchnxb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:angle-down"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qlhqa5a1y.css';
import '../../css/x/xhzturs6n.css';
import '../../css/u/ub62qzant.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="qlhqa5a1y"/><path class="xhzturs6n"/></g><path clip-rule="evenodd" class="ub62qzant"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-bold-duotone"} {...others} />);
}

export default Component;

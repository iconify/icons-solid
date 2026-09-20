import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6vxvox9y.css';
import '../../css/m/mrxlb0n2j.css';
import '../../css/k/k_4uaccxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b6vxvox9y"/><path class="mrxlb0n2j"/><path class="k_4uaccxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filters-duotone"} {...others} />);
}

export default Component;

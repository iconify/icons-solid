import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9acwmm1g.css';
import '../../css/l/lant7tb4p.css';
import '../../css/e/ey0latwck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v9acwmm1g"/><path class="lant7tb4p"/><path class="ey0latwck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drive"} {...others} />);
}

export default Component;

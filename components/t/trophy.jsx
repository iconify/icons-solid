import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uwweowbzl.css';
import '../../css/c/cyxd695zt.css';
import '../../css/l/l_ve02ule.css';
import '../../css/r/rwruoy8xg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uwweowbzl"/><path class="cyxd695zt"/><path class="l_ve02ule"/><path class="rwruoy8xg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trophy"} {...others} />);
}

export default Component;

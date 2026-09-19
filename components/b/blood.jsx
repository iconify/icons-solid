import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mbsc-1b5r.css';
import '../../css/e/eixrv1bce.css';
import '../../css/o/o3h4-07ri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mbsc-1b5r"/><path class="eixrv1bce"/><path class="o3h4-07ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blood"} {...others} />);
}

export default Component;

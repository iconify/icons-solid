import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ninu-1bxu.css';
import '../../css/p/p3uy-bbpn.css';
import '../../css/s/sgxyf4b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ninu-1bxu"/><path class="p3uy-bbpn"/><path class="sgxyf4b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:test-tube-01"} {...others} />);
}

export default Component;

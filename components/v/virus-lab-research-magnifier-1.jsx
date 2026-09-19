import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5r0y_lle.css';
import '../../css/i/ir4zst_pb.css';
import '../../css/f/fux2y5bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s5r0y_lle"/><path class="ir4zst_pb"/><path class="fux2y5bwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:virus-lab-research-magnifier-1"} {...others} />);
}

export default Component;

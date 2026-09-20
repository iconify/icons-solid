import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_dxpcc8d.css';
import '../../css/t/tm9o1_bsg.css';
import '../../css/k/kyxecbcrt.css';
import '../../css/y/yvnwx-t5d.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="i_dxpcc8d"/><path class="tm9o1_bsg"/><path class="kyxecbcrt"/><path class="yvnwx-t5d"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-jamaica"} {...others} />);
}

export default Component;

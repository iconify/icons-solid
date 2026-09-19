import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lzv3s0blr.css';
import '../../css/t/tbin5_b6g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="lzv3s0blr"/><path class="tbin5_b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:omni"} {...others} />);
}

export default Component;

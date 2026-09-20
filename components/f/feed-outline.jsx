import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3lp8cccl.css';
import '../../css/c/cc_c_n2ew.css';
import '../../css/u/uxpvpsbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t3lp8cccl"/><path class="cc_c_n2ew"/><path clip-rule="evenodd" class="uxpvpsbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:feed-outline"} {...others} />);
}

export default Component;

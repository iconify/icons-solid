import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rx3ycfb7y.css';
import '../../css/t/ti0x26bhq.css';
import '../../css/a/awgy5qdix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rx3ycfb7y"/><path clip-rule="evenodd" class="ti0x26bhq"/><path class="awgy5qdix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stretching-round-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcuyecskv.css';
import '../../css/b/bqc8i0b_d.css';
import '../../css/z/znrnx5bpx.css';
import '../../css/i/i7y2ohbei.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="fcuyecskv"/><path class="bqc8i0b_d"/><path class="znrnx5bpx"/><path class="i7y2ohbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:googlecloud"} {...others} />);
}

export default Component;

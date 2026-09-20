import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chjn_i6rt.css';
import '../../css/c/czv0ewbne.css';
import '../../css/g/g8k88bb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="chjn_i6rt"/><path class="czv0ewbne"/><path class="g8k88bb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-minimalistic-bold"} {...others} />);
}

export default Component;

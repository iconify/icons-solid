import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ka5pt8bhv.css';
import '../../css/n/nfbfp3s5x.css';
import '../../css/h/hj_z2vbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ka5pt8bhv"/><path class="nfbfp3s5x"/><path clip-rule="evenodd" class="hj_z2vbmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:low-income-level-outline-24px"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qoxqhd7xn.css';
import '../../css/k/kdwsm_job.css';
import '../../css/z/z1yj6sbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qoxqhd7xn"/><path class="kdwsm_job"/><path class="z1yj6sbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:waterdrops-bold"} {...others} />);
}

export default Component;

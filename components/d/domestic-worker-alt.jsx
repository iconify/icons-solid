import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixbft3bvx.css';
import '../../css/p/pe-vqcblg.css';
import '../../css/v/vm02urlpi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ixbft3bvx"/><path clip-rule="evenodd" class="pe-vqcblg"/><path class="vm02urlpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:domestic-worker-alt"} {...others} />);
}

export default Component;

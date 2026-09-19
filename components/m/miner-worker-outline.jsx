import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sywyxcrdp.css';
import '../../css/o/ozq7jpbkt.css';
import '../../css/e/ev8vc4b6a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sywyxcrdp"/><path class="ozq7jpbkt"/><path clip-rule="evenodd" class="ev8vc4b6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:miner-worker-outline"} {...others} />);
}

export default Component;

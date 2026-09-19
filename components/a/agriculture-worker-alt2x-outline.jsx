import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ungq8mb9a.css';
import '../../css/t/tsg2te_ym.css';
import '../../css/h/hd1zh1qcr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ungq8mb9a"/><path class="tsg2te_ym"/><path clip-rule="evenodd" class="hd1zh1qcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:agriculture-worker-alt2x-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1_koccvr.css';
import '../../css/l/lsl7qwgdg.css';
import '../../css/t/ttmslz4cc.css';
import '../../css/w/w1nca4blz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l1_koccvr"/><path class="lsl7qwgdg"/><path clip-rule="evenodd" class="ttmslz4cc"/><path class="w1nca4blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:agriculture-worker-outline"} {...others} />);
}

export default Component;

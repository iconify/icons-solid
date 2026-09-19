import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-34_9fai.css';
import '../../css/k/k-xgrzblp.css';
import '../../css/e/edhjo_-9m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s-34_9fai"/><path clip-rule="evenodd" class="k-xgrzblp"/><path class="edhjo_-9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant-0812w2x-outline"} {...others} />);
}

export default Component;

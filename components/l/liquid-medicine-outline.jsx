import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9p8enugo.css';
import '../../css/w/wv3sbdery.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="r9p8enugo"/><path clip-rule="evenodd" class="wv3sbdery"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:liquid-medicine-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_brcyb1d.css';
import '../../css/w/wmhmecc_x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="n_brcyb1d"/><path clip-rule="evenodd" class="wmhmecc_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:drop-medicine-outline"} {...others} />);
}

export default Component;

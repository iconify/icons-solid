import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8yasem6x.css';
import '../../css/k/k-484nzfv.css';
import '../../css/d/doxm9ybid.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="g8yasem6x"/><path class="k-484nzfv"/><path clip-rule="evenodd" class="doxm9ybid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sweating2x-outline"} {...others} />);
}

export default Component;

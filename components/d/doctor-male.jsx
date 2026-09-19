import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6id0lbwz.css';
import '../../css/m/mxns_2bzi.css';
import '../../css/s/shbvfpb7n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h6id0lbwz"/><path class="mxns_2bzi"/><path class="shbvfpb7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:doctor-male"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6n7-ij3e.css';
import '../../css/r/r_vfe3bhg.css';
import '../../css/w/wky8mmmcc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="n6n7-ij3e"/><path class="r_vfe3bhg"/><path clip-rule="evenodd" class="wky8mmmcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sleepy2x-outline"} {...others} />);
}

export default Component;

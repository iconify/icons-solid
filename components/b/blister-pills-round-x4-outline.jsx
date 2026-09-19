import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plff__bnn.css';
import '../../css/c/cwjg7g3za.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="plff__bnn"/><path clip-rule="evenodd" class="cwjg7g3za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blister-pills-round-x4-outline"} {...others} />);
}

export default Component;

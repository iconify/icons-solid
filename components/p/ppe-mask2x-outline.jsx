import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdvih8psk.css';
import '../../css/t/ti0r0kb_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="mdvih8psk"/><path clip-rule="evenodd" class="ti0r0kb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-mask2x-outline"} {...others} />);
}

export default Component;

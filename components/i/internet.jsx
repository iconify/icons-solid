import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_m248b8z.css';
import '../../css/t/tely9lb-g.css';
import '../../css/y/y4yl88bpn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g_m248b8z"/><path clip-rule="evenodd" class="tely9lb-g"/><path class="y4yl88bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:internet"} {...others} />);
}

export default Component;

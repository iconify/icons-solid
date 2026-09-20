import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ipzo3qbtp.css';
import '../../css/i/iezb6eb_v.css';
import '../../css/p/pbxa9vb2n.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="ipzo3qbtp"/><path clip-rule="evenodd" class="iezb6eb_v"/><path clip-rule="evenodd" class="pbxa9vb2n"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:shield-check-off"} {...others} />);
}

export default Component;

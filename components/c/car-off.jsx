import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1zm5vbde.css';
import '../../css/e/esnsmq0kx.css';
import '../../css/f/f97-rowio.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i1zm5vbde"/><path clip-rule="evenodd" class="esnsmq0kx"/><path clip-rule="evenodd" class="f97-rowio"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:car-off"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2-s4tbmo.css';
import '../../css/k/k1do8cciu.css';
import '../../css/b/bxfg0ibwz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s2-s4tbmo"/><path clip-rule="evenodd" class="k1do8cciu"/><path clip-rule="evenodd" class="bxfg0ibwz"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-right-off"} {...others} />);
}

export default Component;

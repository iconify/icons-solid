import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/i/irp8ccchz.css';
import '../../css/i/iawjh31xa.css';
import '../../css/k/kd-0aibfs.css';
import '../../css/s/s2-s4tbmo.css';
import '../../css/k/k1do8cciu.css';
import '../../css/b/bxfg0ibwz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="irp8ccchz"/><path class="iawjh31xa"/><path class="kd-0aibfs"/></g><path clip-rule="evenodd" class="s2-s4tbmo"/><path clip-rule="evenodd" class="k1do8cciu"/><path clip-rule="evenodd" class="bxfg0ibwz"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-right-off"} {...others} />);
}

export default Component;

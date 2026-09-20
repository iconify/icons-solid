import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/c/cnfjgmdcb.css';
import '../../css/m/mf0yxrq8v.css';
import '../../css/h/hs9g5acuz.css';
import '../../css/w/wplr_9b2m.css';
import '../../css/m/m5cuh9a3g.css';
import '../../css/k/kz72l8bmh.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="cnfjgmdcb"/><path class="mf0yxrq8v"/><path class="hs9g5acuz"/></g><path clip-rule="evenodd" class="wplr_9b2m"/><path clip-rule="evenodd" class="m5cuh9a3g"/><path clip-rule="evenodd" class="kz72l8bmh"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:shuffle-off"} {...others} />);
}

export default Component;

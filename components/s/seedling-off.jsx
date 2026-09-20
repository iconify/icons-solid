import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qc-apv10r.css';
import '../../css/n/n4byf3-kh.css';
import '../../css/s/spbi7bcof.css';
import '../../css/t/tdapwmbfy.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="qc-apv10r"/><path class="n4byf3-kh"/><path class="spbi7bcof"/><path class="tdapwmbfy"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:seedling-off"} {...others} />);
}

export default Component;

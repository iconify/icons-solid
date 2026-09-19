import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w34n3gspy.css';
import '../../css/v/vxhzz5-le.css';
import '../../css/c/ctph5xevs.css';
import '../../css/o/ow3-3wb5j.css';
import '../../css/t/tbxuh8bdh.css';
import '../../css/l/lsragacep.css';
import '../../css/u/ubuzbfdqc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w34n3gspy"/><path class="vxhzz5-le"/><path clip-rule="evenodd" class="ctph5xevs"/><path class="ow3-3wb5j"/><path clip-rule="evenodd" class="tbxuh8bdh"/><path class="lsragacep"/><path clip-rule="evenodd" class="ubuzbfdqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant-3638w-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/n/ndg7m8isl.css';
import '../../css/k/kejyeccmm.css';
import '../../css/o/oythmwbfe.css';
import '../../css/n/nxy2nv8vm.css';
import '../../css/s/shs8wabze.css';
import '../../css/v/vl2w4lb8e.css';
import '../../css/j/j_d97ibzd.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="ndg7m8isl"/><path clip-rule="evenodd" class="kejyeccmm"/><path clip-rule="evenodd" class="oythmwbfe"/><path class="nxy2nv8vm"/><path clip-rule="evenodd" class="shs8wabze"/><path class="vl2w4lb8e"/><path clip-rule="evenodd" class="j_d97ibzd"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:briefcase-circle-filled"} {...others} />);
}

export default Component;

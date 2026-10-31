import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p_wsk82au.css';
import '../../css/h/htio_ps-t.css';
import '../../css/d/d8hyevxcg.css';
import '../../css/k/kftj_ipdz.css';
import '../../css/g/g5dgrab9a.css';
import '../../css/s/so--l0ivl.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p_wsk82au wm-shadow"/><path class="htio_ps-t"/><path class="d8hyevxcg"/><path class="kftj_ipdz"/><path class="g5dgrab9a"/><path class="so--l0ivl"/><path class="bs1xk8baz"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-woman"} {...others} />);
}

export default Component;

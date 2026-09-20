import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3hqw4b7o.css';
import '../../css/w/w3z3k8ryx.css';
import '../../css/k/kc11vgbcu.css';
import '../../css/p/pjk88sbgh.css';
import '../../css/u/ucx3avbce.css';
import '../../css/o/o8rz3dq2i.css';
import '../../css/s/slo-k0bsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g3hqw4b7o"/><path class="w3z3k8ryx"/><path class="kc11vgbcu"/><path class="pjk88sbgh"/><path class="ucx3avbce"/><path class="o8rz3dq2i"/><path class="slo-k0bsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:house-signal"} {...others} />);
}

export default Component;

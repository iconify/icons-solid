import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ket9b_brq.css';
import '../../css/i/irpq6_opq.css';
import '../../css/n/nu1vehbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ket9b_brq"/><path class="irpq6_opq"/><path class="nu1vehbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-tick"} {...others} />);
}

export default Component;

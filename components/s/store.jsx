import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/soc2g0bzj.css';
import '../../css/a/ak5q78biy.css';
import '../../css/m/mno_rjo8d.css';
import '../../css/o/ocp990k_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="soc2g0bzj"/><path class="ak5q78biy wm-a"/><path class="mno_rjo8d"/><path class="ocp990k_b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:store"} {...others} />);
}

export default Component;

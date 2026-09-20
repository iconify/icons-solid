import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/y/yvv-88hnl.css';
import '../../css/h/hkd2llbml.css';
import '../../css/w/wq-t_3i_z.css';
import '../../css/r/rc0swhbwk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="yvv-88hnl"/><path class="hkd2llbml"/><path class="wq-t_3i_z"/><path class="rc0swhbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-rotate-duo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z770qubut.css';
import '../../css/f/fjjtewbdp.css';
import '../../css/h/h5_h89bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z770qubut"/><path class="fjjtewbdp"/><circle transform="matrix(1 0 0 -1 10.75 17.06)" class="h5_h89bsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:alert-rhombus"} {...others} />);
}

export default Component;

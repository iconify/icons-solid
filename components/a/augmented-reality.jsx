import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h_cgl-bdl.css';
import '../../css/d/d-5qcb7mz.css';
import '../../css/w/w4xii1z6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="h_cgl-bdl"/><path class="d-5qcb7mz"/><path class="w4xii1z6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:augmented-reality"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hl0_fhxpy.css';
import '../../css/w/wsqb_08nl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hl0_fhxpy"/><path class="wsqb_08nl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:door-stairwell"} {...others} />);
}

export default Component;

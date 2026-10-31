import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu0uwrb0e.css';
import '../../css/c/c4mutqv1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qu0uwrb0e"/><path class="c4mutqv1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:drill-duocolor-round"} {...others} />);
}

export default Component;

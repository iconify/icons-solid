import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hdceo_cfo.css';
import '../../css/u/uo2dpgbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hdceo_cfo"/><path class="uo2dpgbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ear-off"} {...others} />);
}

export default Component;

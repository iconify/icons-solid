import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q53mxcbwh.css';
import '../../css/q/qg747fhvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q53mxcbwh"/><path class="qg747fhvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bell-concierge-off"} {...others} />);
}

export default Component;

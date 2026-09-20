import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qp0-a-b7k.css';
import '../../css/r/rqfu-k_9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qp0-a-b7k"/><path class="rqfu-k_9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:lidquid-drop-waves-2"} {...others} />);
}

export default Component;

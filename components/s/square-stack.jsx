import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vbcduhp6n.css';
import '../../css/i/i0in-bbuh.css';
import '../../css/x/x-qcbehps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vbcduhp6n"/><path class="i0in-bbuh"/><path class="x-qcbehps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-stack"} {...others} />);
}

export default Component;

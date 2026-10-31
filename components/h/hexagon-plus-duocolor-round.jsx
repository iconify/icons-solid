import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e54x5p4fq.css';
import '../../css/m/m5m2x9czc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e54x5p4fq"/><path class="m5m2x9czc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hexagon-plus-duocolor-round"} {...others} />);
}

export default Component;

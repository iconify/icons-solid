import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ii1_nvtpi.css';
import '../../css/u/uphrqe4xu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ii1_nvtpi"/><path class="uphrqe4xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dna"} {...others} />);
}

export default Component;

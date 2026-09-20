import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/damyb0bsc.css';
import '../../css/p/pd3eid_ip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="damyb0bsc"/><path class="pd3eid_ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dna-off"} {...others} />);
}

export default Component;

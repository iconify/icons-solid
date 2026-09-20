import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovdhzzqne.css';
import '../../css/q/q1n2pmbay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ovdhzzqne"/><path class="q1n2pmbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-code"} {...others} />);
}

export default Component;

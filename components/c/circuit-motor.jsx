import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bccbekb8n.css';
import '../../css/c/cjcy_qbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bccbekb8n"/><path class="cjcy_qbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circuit-motor"} {...others} />);
}

export default Component;

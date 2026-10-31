import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pu-76gbng.css';
import '../../css/h/hdi6-gpca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pu-76gbng"/><path class="hdi6-gpca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:agent-duocolor-round"} {...others} />);
}

export default Component;

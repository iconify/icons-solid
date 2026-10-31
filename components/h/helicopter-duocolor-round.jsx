import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p9h-8fbzv.css';
import '../../css/m/mllmdkhdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p9h-8fbzv"/><path class="mllmdkhdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:helicopter-duocolor-round"} {...others} />);
}

export default Component;

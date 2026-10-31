import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk6uw-bym.css';
import '../../css/i/i8ptlcpac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sk6uw-bym"/><path class="i8ptlcpac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:frame-duocolor-round"} {...others} />);
}

export default Component;

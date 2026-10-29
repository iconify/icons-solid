import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbwg7tbug.css';
import '../../css/b/blorf4sde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qbwg7tbug"/><path class="blorf4sde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-fading-play"} {...others} />);
}

export default Component;

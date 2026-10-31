import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tts-evwoe.css';
import '../../css/q/q7ih-tbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tts-evwoe"/><path class="q7ih-tbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sim-card-duocolor-round"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wgl8w-dbv.css';
import '../../css/w/wqpg91bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wgl8w-dbv"/><path class="wqpg91bpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ear-waveform-two-tone"} {...others} />);
}

export default Component;

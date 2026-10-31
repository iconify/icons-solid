import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4zdlxbwc.css';
import '../../css/q/qeti8k12m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w4zdlxbwc"/><path class="qeti8k12m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:music-note-sparkle-duocolor-round"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7r7g1bwi.css';
import '../../css/k/kp3dedlav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u7r7g1bwi"/><path class="kp3dedlav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-plus-duocolor-round"} {...others} />);
}

export default Component;

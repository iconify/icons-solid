import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-8uw3b-x.css';
import '../../css/n/n5iafhovj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x-8uw3b-x"/><path class="n5iafhovj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-dots-duocolor-round"} {...others} />);
}

export default Component;

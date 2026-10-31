import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iuthe4h4z.css';
import '../../css/p/pposv4bey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iuthe4h4z"/><path class="pposv4bey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-sparkle-duocolor-round"} {...others} />);
}

export default Component;

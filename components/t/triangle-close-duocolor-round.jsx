import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pane80bkq.css';
import '../../css/p/pj75233cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pane80bkq"/><path class="pj75233cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:triangle-close-duocolor-round"} {...others} />);
}

export default Component;

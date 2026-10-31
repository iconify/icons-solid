import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fu56vibry.css';
import '../../css/m/mw-39gg1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fu56vibry"/><path class="mw-39gg1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bandage-duocolor-round"} {...others} />);
}

export default Component;

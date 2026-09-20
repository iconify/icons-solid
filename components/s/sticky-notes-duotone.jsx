import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w3sn9lbrk.css';
import '../../css/h/hf1azzbkc.css';
import '../../css/m/mvgiplmjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w3sn9lbrk"/><path class="hf1azzbkc"/><path clip-rule="evenodd" class="mvgiplmjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-notes-duotone"} {...others} />);
}

export default Component;

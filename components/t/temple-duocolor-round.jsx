import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ce59h9myo.css';
import '../../css/u/u1arpjfde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ce59h9myo"/><path class="u1arpjfde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:temple-duocolor-round"} {...others} />);
}

export default Component;

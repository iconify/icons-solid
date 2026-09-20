import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/csm16okln.css';
import '../../css/f/ffc0gnb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="csm16okln"/><path class="ffc0gnb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podium-1-duotone"} {...others} />);
}

export default Component;

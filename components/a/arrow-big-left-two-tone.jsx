import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cy3t6rbdc.css';
import '../../css/h/haqo56b_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cy3t6rbdc"/><path class="haqo56b_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-left-two-tone"} {...others} />);
}

export default Component;

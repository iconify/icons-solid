import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gt28q7bvo.css';
import '../../css/l/lduibh4wl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gt28q7bvo"/><path class="lduibh4wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ear-two-tone"} {...others} />);
}

export default Component;

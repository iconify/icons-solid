import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l97qpbbsj.css';
import '../../css/e/en_z4s6ic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l97qpbbsj"/><path class="en_z4s6ic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:vote"} {...others} />);
}

export default Component;

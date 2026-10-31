import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q3dpwpbvj.css';
import '../../css/c/crq9tybqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q3dpwpbvj"/><path class="crq9tybqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:x-duocolor-round"} {...others} />);
}

export default Component;

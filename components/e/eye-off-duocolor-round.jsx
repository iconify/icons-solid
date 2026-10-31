import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tbicm0btt.css';
import '../../css/k/kgjbb4tdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tbicm0btt"/><path class="kgjbb4tdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eye-off-duocolor-round"} {...others} />);
}

export default Component;

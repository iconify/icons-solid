import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wztp-zbkq.css';
import '../../css/u/ucf-pfbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wztp-zbkq"/><path class="ucf-pfbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:butterfly"} {...others} />);
}

export default Component;

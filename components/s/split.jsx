import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kbwz-604a.css';
import '../../css/c/cl40u0byo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kbwz-604a"/><path class="cl40u0byo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:split"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tm6t7bb_q.css';
import '../../css/m/m4l-9ybuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tm6t7bb_q"/><circle class="m4l-9ybuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:chevron-left-circle-line"} {...others} />);
}

export default Component;

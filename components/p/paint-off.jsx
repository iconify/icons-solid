import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fw-p4owqd.css';
import '../../css/k/ktj3-7bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fw-p4owqd"/><path class="ktj3-7bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:paint-off"} {...others} />);
}

export default Component;

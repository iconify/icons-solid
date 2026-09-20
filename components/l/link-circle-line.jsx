import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k8xm15yec.css';
import '../../css/v/vn3dy8b1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="k8xm15yec"/><path class="vn3dy8b1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:link-circle-line"} {...others} />);
}

export default Component;

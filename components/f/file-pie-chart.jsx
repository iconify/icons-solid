import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/q/qdca2rboq.css';
import '../../css/u/u2n0v5-2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g6wanyb_h"/><path class="qdca2rboq"/><path class="u2n0v5-2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-pie-chart"} {...others} />);
}

export default Component;

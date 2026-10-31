import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zjdyf7-3d.css';
import '../../css/k/k8269ub5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zjdyf7-3d"/><path class="k8269ub5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-dashed-plus-duocolor-round"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oak4c5bhj.css';
import '../../css/k/k8nc2n2mm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oak4c5bhj"/><path class="k8nc2n2mm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:book-duocolor-round"} {...others} />);
}

export default Component;

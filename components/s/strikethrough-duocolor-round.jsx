import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qp-r10b4n.css';
import '../../css/e/ed868obsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qp-r10b4n"/><path class="ed868obsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:strikethrough-duocolor-round"} {...others} />);
}

export default Component;

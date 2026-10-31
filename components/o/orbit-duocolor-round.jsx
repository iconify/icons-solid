import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8po9q5jx.css';
import '../../css/k/kmiew8bty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o8po9q5jx"/><path class="kmiew8bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:orbit-duocolor-round"} {...others} />);
}

export default Component;

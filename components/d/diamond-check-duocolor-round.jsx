import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k8s1leb8y.css';
import '../../css/g/g63hpbb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k8s1leb8y"/><path class="g63hpbb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:diamond-check-duocolor-round"} {...others} />);
}

export default Component;

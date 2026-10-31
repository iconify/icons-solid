import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k8695sbsq.css';
import '../../css/a/aqzxuljmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k8695sbsq"/><path class="aqzxuljmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:potted-plant-duocolor-round"} {...others} />);
}

export default Component;

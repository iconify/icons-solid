import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l_slstbru.css';
import '../../css/q/qdcks7bbe.css';
import '../../css/f/f5f0dybwh.css';
import '../../css/d/d-xx34bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l_slstbru wm-k"/><path class="qdcks7bbe wm-a"/><path class="f5f0dybwh"/><path class="d-xx34bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:screwdriver"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bf1x81e-m.css';
import '../../css/i/icagbhbcb.css';
import '../../css/e/eq8k4cc-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bf1x81e-m wm-k"/><path class="icagbhbcb wm-a"/><path class="eq8k4cc-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:thandai"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bgwqsrfvl.css';
import '../../css/q/qzfw0gqjk.css';
import '../../css/d/d5qir-b6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bgwqsrfvl"/><path class="qzfw0gqjk"/><path class="d5qir-b6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:house-wifi"} {...others} />);
}

export default Component;

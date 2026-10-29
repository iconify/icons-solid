import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k48bdwq9n.css';
import '../../css/g/ge5djsb-y.css';
import '../../css/w/whli9vrlz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k48bdwq9n"/><path class="ge5djsb-y"/><path class="whli9vrlz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:message-circle-question"} {...others} />);
}

export default Component;

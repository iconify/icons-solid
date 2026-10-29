import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mevgakb8a.css';
import '../../css/f/ftmmgybqo.css';
import '../../css/s/szy4bhbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mevgakb8a"/><path class="ftmmgybqo"/><path class="szy4bhbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:radar"} {...others} />);
}

export default Component;

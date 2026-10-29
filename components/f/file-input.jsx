import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vk4yonzaw.css';
import '../../css/p/p1kbumysc.css';
import '../../css/o/ozl2zbbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vk4yonzaw"/><path class="p1kbumysc"/><path class="ozl2zbbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-input"} {...others} />);
}

export default Component;

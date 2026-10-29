import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yxvqkwv7c.css';
import '../../css/g/g_2pghbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="yxvqkwv7c"/><path class="g_2pghbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:scan-text"} {...others} />);
}

export default Component;

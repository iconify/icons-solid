import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xophhi09q.css';
import '../../css/q/q457fz7pk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="xophhi09q"/><path class="q457fz7pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hand"} {...others} />);
}

export default Component;

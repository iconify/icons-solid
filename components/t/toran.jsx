import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bce0lc-sb.css';
import '../../css/n/nh5ba4blo.css';
import '../../css/y/yxnj9mkmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bce0lc-sb wm-k"/><path class="nh5ba4blo wm-a"/><path class="yxnj9mkmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:toran"} {...others} />);
}

export default Component;

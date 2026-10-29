import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6p3zxbrz.css';
import '../../css/q/qdqb9b-3u.css';
import '../../css/p/p1jnd1y8i.css';
import '../../css/v/v0u0mb9pz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6p3zxbrz wm-k"/><path class="qdqb9b-3u wm-a"/><path class="p1jnd1y8i wm-k"/><path class="v0u0mb9pz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gem"} {...others} />);
}

export default Component;

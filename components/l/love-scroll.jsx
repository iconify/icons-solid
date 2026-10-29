import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c09af7b7p.css';
import '../../css/r/rvt-gdn_n.css';
import '../../css/i/i4_81lnam.css';
import '../../css/y/ydodnz-lk.css';
import '../../css/n/n0h11s99a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c09af7b7p wm-k"/><path class="rvt-gdn_n wm-k"/><path class="i4_81lnam wm-s"/><path class="ydodnz-lk"/><path class="n0h11s99a wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:love-scroll"} {...others} />);
}

export default Component;

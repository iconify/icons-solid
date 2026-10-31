import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/umjt8mb0r.css';
import '../../css/b/bonnpubkr.css';
import '../../css/d/d8d5-xbyq.css';
import '../../css/y/yt5ophbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="umjt8mb0r wm-shadow"/><path class="bonnpubkr"/><path class="d8d5-xbyq"/><path class="yt5ophbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:christmas-tree"} {...others} />);
}

export default Component;

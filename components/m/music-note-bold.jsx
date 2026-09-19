import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc9b90bna.css';
import '../../css/a/ai5cs6a6e.css';
import '../../css/f/fcjz4bwnd.css';
import '../../css/j/jfdb2j0lk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="xc9b90bna"><path class="ai5cs6a6e"/><ellipse class="fcjz4bwnd"/><path class="jfdb2j0lk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:music-note-bold"} {...others} />);
}

export default Component;

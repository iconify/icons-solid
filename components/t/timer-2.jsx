import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kbumho25s.css';
import '../../css/x/xtd9eubfb.css';
import '../../css/r/r8g_vabug.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="h01tyzbfu"><path class="kbumho25s"/><path class="xtd9eubfb"/><path class="r8g_vabug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-2"} {...others} />);
}

export default Component;

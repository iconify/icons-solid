import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwp43mulz.css';
import '../../css/r/r6v_pabhc.css';
import '../../css/j/je6hsf0yt.css';
import '../../css/y/ywibotp-q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hwp43mulz"/><path class="r6v_pabhc"/><path clip-rule="evenodd" class="je6hsf0yt"/><path class="ywibotp-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:microphone-1-outline"} {...others} />);
}

export default Component;

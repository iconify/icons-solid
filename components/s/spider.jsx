import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u0ydl9buk.css';
import '../../css/r/rq3z68bje.css';
import '../../css/t/tl-qtg4ay.css';
import '../../css/z/z7z6crbvt.css';
import '../../css/p/p3dq04btg.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="u0ydl9buk"/><path class="rq3z68bje wm-shine"/><path class="tl-qtg4ay wm-k"/><path class="wm-a z7z6crbvt"/><path class="p3dq04btg wm-s"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:spider"} {...others} />);
}

export default Component;

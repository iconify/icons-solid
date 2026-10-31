import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/j/j-s_68b8w.css';
import '../../css/r/r09u1cb9r.css';
import '../../css/w/wb_ktub6l.css';
import '../../css/h/h921q13ns.css';
import '../../css/z/zhg97wwre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="j-s_68b8w"/><path class="r09u1cb9r"/><path class="wb_ktub6l"/><path class="h921q13ns"/><path class="zhg97wwre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:badge-x"} {...others} />);
}

export default Component;

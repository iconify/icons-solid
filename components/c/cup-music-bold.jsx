import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg0--o_mk.css';
import '../../css/o/odd_1id3g.css';
import '../../css/r/rsdly3b2w.css';
import '../../css/h/hy0wlvbcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yg0--o_mk"/><path clip-rule="evenodd" class="odd_1id3g"/><path class="rsdly3b2w"/><path class="hy0wlvbcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-music-bold"} {...others} />);
}

export default Component;

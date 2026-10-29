import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rnoglt5ys.css';
import '../../css/m/m7luntift.css';
import '../../css/j/jd9ceobpf.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rnoglt5ys"/><path class="m7luntift wm-s"/><path class="jd9ceobpf wm-s"/><path class="wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-search-duo"} {...others} />);
}

export default Component;

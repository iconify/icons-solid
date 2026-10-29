import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/l/lf-b92d3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/><path class="lf-b92d3v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-check"} {...others} />);
}

export default Component;

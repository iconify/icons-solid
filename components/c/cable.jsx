import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/elu4rivwl.css';
import '../../css/y/ycz06vb6l.css';
import '../../css/w/wxsot0b4m.css';
import '../../css/h/hd5dozlqz.css';
import '../../css/u/uft47zw7o.css';
import '../../css/r/re5zsvb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="elu4rivwl wm-shadow"/><path class="ycz06vb6l"/><path class="wxsot0b4m"/><path class="hd5dozlqz"/><path class="uft47zw7o"/><path class="re5zsvb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cable"} {...others} />);
}

export default Component;

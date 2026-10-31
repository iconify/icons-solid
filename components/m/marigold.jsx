import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/doscxbe0j.css';
import '../../css/p/p4yjz1bdu.css';
import '../../css/o/o7lgvwflj.css';
import '../../css/c/c0ihz9bht.css';
import '../../css/s/szyhx_awp.css';
import '../../css/y/yrelwm4iw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="doscxbe0j wm-shadow"/><path class="p4yjz1bdu"/><path class="o7lgvwflj"/><path class="c0ihz9bht"/><path class="szyhx_awp"/><path class="yrelwm4iw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:marigold"} {...others} />);
}

export default Component;

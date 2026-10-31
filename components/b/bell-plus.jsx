import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e9c3edbac.css';
import '../../css/j/jfc6p_8ce.css';
import '../../css/e/efautybtv.css';
import '../../css/z/z2zjn2g3t.css';
import '../../css/a/aa9o_6hgj.css';
import '../../css/w/w6x-pnbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e9c3edbac wm-shadow"/><path class="jfc6p_8ce"/><path class="efautybtv"/><path class="z2zjn2g3t"/><path class="aa9o_6hgj"/><path class="w6x-pnbiv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bell-plus"} {...others} />);
}

export default Component;

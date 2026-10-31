import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r9yy0v2wg.css';
import '../../css/j/jfc6p_8ce.css';
import '../../css/e/efautybtv.css';
import '../../css/z/z2zjn2g3t.css';
import '../../css/x/x04oytd5e.css';
import '../../css/j/jsk8lwb7w.css';
import '../../css/a/aa9o_6hgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r9yy0v2wg wm-shadow"/><path class="jfc6p_8ce"/><path class="efautybtv"/><path class="z2zjn2g3t"/><path class="wm-s x04oytd5e"/><path class="jsk8lwb7w wm-s"/><path class="aa9o_6hgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bell-dot"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dknzj6b_j.css';
import '../../css/h/hm8w6hg3b.css';
import '../../css/b/b_y2ijb5q.css';
import '../../css/x/xs_occxnv.css';
import '../../css/a/al15f9bxm.css';
import '../../css/j/jpdqgbc3y.css';
import '../../css/x/x0ma-o8gy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dknzj6b_j wm-shadow"/><path class="hm8w6hg3b"/><path class="b_y2ijb5q"/><path class="xs_occxnv"/><path class="al15f9bxm"/><path class="jpdqgbc3y"/><path class="wm-s x0ma-o8gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lunar-drum"} {...others} />);
}

export default Component;

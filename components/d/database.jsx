import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wtrzveb1s.css';
import '../../css/e/euw9mtbkm.css';
import '../../css/t/tgaafebcx.css';
import '../../css/y/yqlz98uhc.css';
import '../../css/e/ep2y_d6ev.css';
import '../../css/a/a0erz9bbx.css';
import '../../css/y/y-rx84bgh.css';
import '../../css/h/hga49sbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k wtrzveb1s"/><path class="euw9mtbkm wm-k"/><path class="tgaafebcx wm-k"/><path class="wm-shine yqlz98uhc"/><path class="ep2y_d6ev wm-k"/><path class="a0erz9bbx wm-k"/><path class="wm-k y-rx84bgh"/><path class="hga49sbmm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:database"} {...others} />);
}

export default Component;

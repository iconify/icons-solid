import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jy5-1tkel.css';
import '../../css/s/spylyxbul.css';
import '../../css/e/e7qxwub6e.css';
import '../../css/j/j-fej7b0r.css';
import '../../css/c/cpbohcbcv.css';
import '../../css/c/cyfxhmbye.css';
import '../../css/e/ef0q2nd_y.css';
import '../../css/l/ll48iosqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jy5-1tkel wm-shadow"/><path class="spylyxbul"/><path class="e7qxwub6e"/><path class="j-fej7b0r"/><path class="cpbohcbcv"/><path class="cyfxhmbye"/><path class="ef0q2nd_y"/><path class="ll48iosqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:dumbbell"} {...others} />);
}

export default Component;

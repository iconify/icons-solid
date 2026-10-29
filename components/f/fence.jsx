import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zhh59kbmb.css';
import '../../css/m/mmno8_bcx.css';
import '../../css/e/e8x995b0y.css';
import '../../css/d/d22exkhhx.css';
import '../../css/a/aknjs_b3d.css';
import '../../css/c/cplyi0b8x.css';
import '../../css/k/kapfwz5_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zhh59kbmb"/><path class="mmno8_bcx"/><path class="e8x995b0y"/><path class="d22exkhhx"/><path class="aknjs_b3d"/><path class="cplyi0b8x wm-deco"/><path class="kapfwz5_w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:fence"} {...others} />);
}

export default Component;

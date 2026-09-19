import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p54kkm0ui.css';
import '../../css/w/wm8g5-men.css';
import '../../css/t/t0q45t93f.css';
import '../../css/x/xszsoj8ri.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p54kkm0ui"/><path class="modx-original-st2 wm8g5-men"/><path class="modx-original-st3 t0q45t93f"/><path class="modx-original-st4 xszsoj8ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:modx"} {...others} />);
}

export default Component;

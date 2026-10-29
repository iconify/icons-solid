import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l1wh4izuh.css';
import '../../css/z/zyx5okbxv.css';
import '../../css/v/vm_t8py_a.css';
import '../../css/s/swd917b6f.css';
import '../../css/u/u8u-uk6mj.css';
import '../../css/u/u20fipqyx.css';
import '../../css/l/l6486kbly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l1wh4izuh wm-shadow"/><path class="zyx5okbxv"/><path class="vm_t8py_a"/><path class="swd917b6f"/><path class="u8u-uk6mj"/><path class="u20fipqyx wm-shine"/><path class="l6486kbly wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:medal"} {...others} />);
}

export default Component;

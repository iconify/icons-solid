import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/byld9tsja.css';
import '../../css/i/i4x3gt80j.css';
import '../../css/r/rz0r78idj.css';
import '../../css/h/hynohacgy.css';
import '../../css/s/sm_kxgr3b.css';
import '../../css/d/dpsdkevkj.css';
import '../../css/r/rop8rgbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="byld9tsja wm-shadow"/><path class="i4x3gt80j"/><path class="rz0r78idj"/><path class="hynohacgy"/><path class="sm_kxgr3b"/><path class="dpsdkevkj wm-shine"/><path class="rop8rgbwc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:paw-print"} {...others} />);
}

export default Component;

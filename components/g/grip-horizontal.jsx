import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d-6h1xbtt.css';
import '../../css/l/l93nsoncv.css';
import '../../css/q/qhhxxvbud.css';
import '../../css/h/h6ajusb6w.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="d-6h1xbtt wm-shadow"/><path class="l93nsoncv"/><path class="qhhxxvbud"/><path class="h6ajusb6w"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:grip-horizontal"} {...others} />);
}

export default Component;

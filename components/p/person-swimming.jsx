import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a92pt7b4n.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kq3nxzb5q.css';
import '../../css/l/luz4ojbgl.css';
import '../../css/j/jedj4ab8x.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q64gx62zp.css';
import '../../css/q/qyxpmwbxy.css';
import '../../css/m/my23js-jz.css';
import '../../css/s/ssek0acdc.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGke90id1x" class="a92pt7b4n"/></defs><g class="t_2lkqbxb"><path class="kq3nxzb5q wm-shadow"/><path class="luz4ojbgl"/><path class="jedj4ab8x"/><use href="#SVGke90id1x" class="d2kvgvbvc"/><path class="q64gx62zp"/><use href="#SVGke90id1x" class="d2kvgvbvc"/><path class="qyxpmwbxy"/><path class="my23js-jz wm-deco"/><path class="ssek0acdc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:person-swimming"} {...others} />);
}

export default Component;

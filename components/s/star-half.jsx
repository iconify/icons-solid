import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/up-h3lbja.css';
import '../../css/u/upro8abul.css';
import '../../css/n/nphaat-vx.css';
import '../../css/s/s-1n0hbuh.css';
import '../../css/p/povpuybgb.css';
import '../../css/a/aj1r45djd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="up-h3lbja wm-shadow"/><path class="upro8abul"/><path class="nphaat-vx"/><path class="s-1n0hbuh"/><path class="povpuybgb wm-shine"/><path class="aj1r45djd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:star-half"} {...others} />);
}

export default Component;

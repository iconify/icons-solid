import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qi_53e5zc.css';
import '../../css/k/k-gnfab9e.css';
import '../../css/n/n8yxkpwol.css';
import '../../css/z/zql8x57fw.css';
import '../../css/h/h3l30mb_j.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qi_53e5zc wm-shadow"/><path class="k-gnfab9e"/><path class="n8yxkpwol"/><path class="zql8x57fw"/><path class="h3l30mb_j wm-shine"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:refrigerator"} {...others} />);
}

export default Component;

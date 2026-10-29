import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ug1ib0bpf.css';
import '../../css/i/ixoemewzi.css';
import '../../css/j/jyr-kgbzg.css';
import '../../css/u/uctpr7n1x.css';
import '../../css/r/rn2z4_brt.css';
import '../../css/u/uxqenybti.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ug1ib0bpf wm-shadow"/><path class="ixoemewzi"/><path class="jyr-kgbzg"/><path class="uctpr7n1x"/><path class="rn2z4_brt wm-shine"/><path class="uxqenybti wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:puzzle-piece"} {...others} />);
}

export default Component;

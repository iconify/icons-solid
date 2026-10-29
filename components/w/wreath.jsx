import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fgfbbab5q.css';
import '../../css/s/snhlshbnx.css';
import '../../css/j/jpgkt6o8n.css';
import '../../css/g/g44psllcu.css';
import '../../css/o/o361zibja.css';
import '../../css/r/rxn8fu6gb.css';
import '../../css/t/tj56cqbcd.css';
import '../../css/z/zplnjw4-m.css';
import '../../css/f/fyncz8bga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fgfbbab5q wm-shadow"/><path class="snhlshbnx"/><path class="jpgkt6o8n"/><path class="g44psllcu"/><path class="o361zibja"/><path class="rxn8fu6gb"/><path class="tj56cqbcd"/><path class="wm-shine zplnjw4-m"/><path class="fyncz8bga wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wreath"} {...others} />);
}

export default Component;

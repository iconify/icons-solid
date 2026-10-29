import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gygliccmt.css';
import '../../css/b/b-5n7tu3i.css';
import '../../css/g/gn6pa2tcf.css';
import '../../css/e/epxndu55b.css';
import '../../css/s/s4uvh7boj.css';
import '../../css/h/hw0l3b_4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gygliccmt wm-shadow"/><path class="b-5n7tu3i"/><path class="gn6pa2tcf"/><path class="epxndu55b"/><path class="s4uvh7boj wm-shine"/><path class="hw0l3b_4d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:strikethrough"} {...others} />);
}

export default Component;

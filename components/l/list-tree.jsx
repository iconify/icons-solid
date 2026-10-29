import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hh3uxy8li.css';
import '../../css/k/k3-kopb8z.css';
import '../../css/h/h-pjgjbsx.css';
import '../../css/f/f8ud07bmb.css';
import '../../css/o/o4436nbrv.css';
import '../../css/u/ufebuik8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hh3uxy8li wm-shadow"/><path class="k3-kopb8z"/><path class="h-pjgjbsx"/><path class="f8ud07bmb"/><path class="o4436nbrv wm-shine"/><path class="ufebuik8d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:list-tree"} {...others} />);
}

export default Component;

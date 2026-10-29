import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lgodtbbrh.css';
import '../../css/u/u37vyacaq.css';
import '../../css/i/ig2jlbbdo.css';
import '../../css/q/qtyx18g8k.css';
import '../../css/d/dmqenwmbg.css';
import '../../css/c/cy21awigj.css';
import '../../css/g/guzrtsbfn.css';
import '../../css/s/s_lu26bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lgodtbbrh wm-shadow"/><path class="u37vyacaq"/><path class="ig2jlbbdo"/><path class="qtyx18g8k"/><path class="dmqenwmbg wm-shine"/><path class="cy21awigj wm-s"/><path class="guzrtsbfn wm-s"/><path class="s_lu26bzb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:text-sparkles"} {...others} />);
}

export default Component;

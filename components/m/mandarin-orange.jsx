import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l3y4vot6p.css';
import '../../css/p/ppej0wb2k.css';
import '../../css/w/why1-4bhe.css';
import '../../css/i/i1zbbybbi.css';
import '../../css/v/vbb4kgskz.css';
import '../../css/e/ehqj16qcu.css';
import '../../css/l/l6486kbly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l3y4vot6p wm-shadow"/><path class="ppej0wb2k"/><path class="why1-4bhe"/><path class="i1zbbybbi"/><path class="vbb4kgskz"/><path class="ehqj16qcu wm-shine"/><path class="l6486kbly wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mandarin-orange"} {...others} />);
}

export default Component;

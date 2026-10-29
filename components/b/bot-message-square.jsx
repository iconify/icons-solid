import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlhhizb-a.css';
import '../../css/j/jbb3wybwz.css';
import '../../css/y/y95e736dh.css';
import '../../css/l/lhrvykz_k.css';
import '../../css/n/njwcjnxjo.css';
import '../../css/k/kim68mbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wlhhizb-a wm-shadow"/><path class="jbb3wybwz"/><path class="y95e736dh"/><path class="lhrvykz_k"/><path class="njwcjnxjo wm-shine"/><path class="kim68mbzg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bot-message-square"} {...others} />);
}

export default Component;

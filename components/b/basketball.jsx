import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ipdk_pbcb.css';
import '../../css/p/p15uqabcv.css';
import '../../css/v/vexzfqtjh.css';
import '../../css/n/nnhzyab3n.css';
import '../../css/p/pqvve0bnc.css';
import '../../css/i/ii1hn--6r.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ipdk_pbcb wm-shadow"/><path class="p15uqabcv"/><path class="vexzfqtjh"/><path class="nnhzyab3n"/><path class="pqvve0bnc wm-shine"/><path class="ii1hn--6r wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:basketball"} {...others} />);
}

export default Component;

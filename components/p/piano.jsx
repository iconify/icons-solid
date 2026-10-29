import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/v/v4q_n0bwt.css';
import '../../css/e/e7gfx2imi.css';
import '../../css/b/blcr4cc-k.css';
import '../../css/p/poryk3pbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="v4q_n0bwt"/><path class="e7gfx2imi"/><path class="blcr4cc-k"/><path class="poryk3pbj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:piano"} {...others} />);
}

export default Component;

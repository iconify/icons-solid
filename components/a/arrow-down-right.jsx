import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/ttpozi63t.css';
import '../../css/b/bfnyvab8v.css';
import '../../css/a/auwba7m8k.css';
import '../../css/p/pjhat0t8x.css';
import '../../css/g/gpw22gbfw.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ttpozi63t wm-shadow"/><path class="bfnyvab8v"/><path class="auwba7m8k"/><path class="pjhat0t8x"/><path class="gpw22gbfw wm-shine"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-down-right"} {...others} />);
}

export default Component;

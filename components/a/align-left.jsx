import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hu__0x3xv.css';
import '../../css/t/ty5tcibcm.css';
import '../../css/h/h8v2qsamg.css';
import '../../css/u/utijjdbik.css';
import '../../css/e/ebgwytbri.css';
import '../../css/h/h_mtm7iui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hu__0x3xv wm-shadow"/><path class="ty5tcibcm"/><path class="h8v2qsamg"/><path class="utijjdbik"/><path class="ebgwytbri wm-shine"/><path class="h_mtm7iui wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:align-left"} {...others} />);
}

export default Component;

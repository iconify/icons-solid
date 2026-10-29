import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u-tt_llmn.css';
import '../../css/a/aj4i3qbqb.css';
import '../../css/u/u9lvkbbnl.css';
import '../../css/t/t3_hcgb0b.css';
import '../../css/i/im5d1vkug.css';
import '../../css/u/u59d_8bwi.css';
import '../../css/o/o6eve4bwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="u-tt_llmn wm-deco"/><path class="aj4i3qbqb wm-deco"/><path class="u9lvkbbnl wm-deco"/><path class="t3_hcgb0b wm-k"/><path class="im5d1vkug wm-a"/><path class="u59d_8bwi wm-k"/><path class="o6eve4bwf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-music-blueprint"} {...others} />);
}

export default Component;

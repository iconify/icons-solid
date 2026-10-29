import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gdqfxjb4t.css';
import '../../css/s/sy_lg-2zx.css';
import '../../css/n/nnla3sbcs.css';
import '../../css/h/hatsdachc.css';
import '../../css/s/sp8zcybad.css';
import '../../css/j/jj_tw7bjc.css';
import '../../css/p/pknjxbblx.css';
import '../../css/m/my23js-jz.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gdqfxjb4t wm-shadow"/><path class="sy_lg-2zx"/><path class="nnla3sbcs"/><path class="hatsdachc"/><path class="sp8zcybad"/><path class="jj_tw7bjc"/><path class="pknjxbblx wm-shine"/><path class="my23js-jz wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wifi"} {...others} />);
}

export default Component;

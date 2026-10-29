import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gnudprf6p.css';
import '../../css/c/ck69yfq6c.css';
import '../../css/t/twuyhibaz.css';
import '../../css/v/v28o0c-vx.css';
import '../../css/e/eelyd1icu.css';
import '../../css/e/e_bfrqb9e.css';
import '../../css/d/d92pp2llf.css';
import '../../css/c/cfzlw1b7p.css';
import '../../css/f/f4qqpgt4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gnudprf6p wm-shadow"/><path class="ck69yfq6c"/><path class="twuyhibaz"/><path class="v28o0c-vx"/><path class="eelyd1icu"/><path class="e_bfrqb9e"/><path class="d92pp2llf"/><path class="cfzlw1b7p"/><path class="f4qqpgt4o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:toran"} {...others} />);
}

export default Component;

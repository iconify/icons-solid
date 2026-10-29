import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xpfcrdlqk.css';
import '../../css/f/f356vdbdu.css';
import '../../css/f/fejoesbno.css';
import '../../css/i/iwg-wdjlr.css';
import '../../css/r/rv3jzc9md.css';
import '../../css/v/v7pfchb5f.css';
import '../../css/s/s0ae6jbtt.css';
import '../../css/v/v8mezr8gu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xpfcrdlqk"/><path class="f356vdbdu"/><path class="fejoesbno"/><path class="iwg-wdjlr"/><path class="rv3jzc9md"/><path class="v7pfchb5f"/><path class="s0ae6jbtt wm-shine"/><path class="v8mezr8gu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:text-search"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xqei0pb_f.css';
import '../../css/j/jg4rm8agi.css';
import '../../css/h/hqy74hb6f.css';
import '../../css/l/lkkfd2bga.css';
import '../../css/n/nga3icc6q.css';
import '../../css/r/r-v3asefh.css';
import '../../css/j/jma5o6bht.css';
import '../../css/y/yxe-72luz.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xqei0pb_f"/><path class="jg4rm8agi"/><path class="hqy74hb6f"/><path class="lkkfd2bga"/><path class="nga3icc6q"/><path class="r-v3asefh"/><path class="jma5o6bht"/><path class="wm-deco yxe-72luz"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-candlestick"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlhhizb-a.css';
import '../../css/j/jbb3wybwz.css';
import '../../css/j/jk6h9nbzq.css';
import '../../css/s/sztgogb4l.css';
import '../../css/e/e3-txudbp.css';
import '../../css/u/us006yukd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wlhhizb-a wm-shadow"/><path class="jbb3wybwz"/><path class="jk6h9nbzq"/><path class="sztgogb4l"/><path class="e3-txudbp wm-shine"/><path class="us006yukd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:message-square-plus"} {...others} />);
}

export default Component;

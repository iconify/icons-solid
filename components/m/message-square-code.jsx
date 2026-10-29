import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlhhizb-a.css';
import '../../css/j/jbb3wybwz.css';
import '../../css/z/zyz3b3hwn.css';
import '../../css/c/cgu-kccmc.css';
import '../../css/i/i_jo63g9s.css';
import '../../css/y/yci3bbcwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wlhhizb-a wm-shadow"/><path class="jbb3wybwz"/><path class="zyz3b3hwn"/><path class="cgu-kccmc"/><path class="i_jo63g9s wm-shine"/><path class="wm-deco yci3bbcwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:message-square-code"} {...others} />);
}

export default Component;

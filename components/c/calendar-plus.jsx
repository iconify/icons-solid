import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/n/n_9-3-bmz.css';
import '../../css/b/bk4o6z5yl.css';
import '../../css/k/kcxerzzzs.css';
import '../../css/j/joty_yrzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="n_9-3-bmz"/><path class="bk4o6z5yl"/><path class="kcxerzzzs wm-shine"/><path class="joty_yrzs wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:calendar-plus"} {...others} />);
}

export default Component;

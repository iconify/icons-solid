import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/r/r0cqg6y6q.css';
import '../../css/a/a3q2eacvo.css';
import '../../css/k/kcxerzzzs.css';
import '../../css/y/y5csqvbrl.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="r0cqg6y6q"/><path class="a3q2eacvo"/><path class="kcxerzzzs wm-shine"/><path class="wm-deco y5csqvbrl"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:calendar-heart"} {...others} />);
}

export default Component;

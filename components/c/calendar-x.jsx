import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/b/bsutkt59h.css';
import '../../css/s/s2wxl-cvv.css';
import '../../css/k/kcxerzzzs.css';
import '../../css/h/ho1yev95w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="bsutkt59h"/><path class="s2wxl-cvv"/><path class="kcxerzzzs wm-shine"/><path class="ho1yev95w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:calendar-x"} {...others} />);
}

export default Component;

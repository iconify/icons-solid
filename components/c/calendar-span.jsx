import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/n/nd2wmlbbp.css';
import '../../css/n/nek3p6bvk.css';
import '../../css/k/kcxerzzzs.css';
import '../../css/q/q5in__i_l.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="nd2wmlbbp"/><path class="nek3p6bvk"/><path class="kcxerzzzs wm-shine"/><path class="q5in__i_l wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:calendar-span"} {...others} />);
}

export default Component;

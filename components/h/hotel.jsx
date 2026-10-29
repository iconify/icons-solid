import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/whtpgb5lf.css';
import '../../css/s/sqmxroo0g.css';
import '../../css/n/nvh-4ob-n.css';
import '../../css/i/iytk3wb1v.css';
import '../../css/i/ia962fcgu.css';
import '../../css/b/bu2dhibpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="whtpgb5lf wm-shadow"/><path class="sqmxroo0g"/><path class="nvh-4ob-n"/><path class="iytk3wb1v"/><path class="ia962fcgu wm-shine"/><path class="bu2dhibpu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:hotel"} {...others} />);
}

export default Component;

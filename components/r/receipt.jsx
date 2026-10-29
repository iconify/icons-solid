import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dlhqev0ms.css';
import '../../css/o/o2ef82bsi.css';
import '../../css/l/l_zakeb6g.css';
import '../../css/q/q-7odhzki.css';
import '../../css/l/lb7_yjbgh.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dlhqev0ms wm-shadow"/><path class="o2ef82bsi"/><path class="l_zakeb6g"/><path class="q-7odhzki"/><path class="lb7_yjbgh wm-shine"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:receipt"} {...others} />);
}

export default Component;

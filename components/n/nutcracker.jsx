import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lgip3s0tm.css';
import '../../css/k/ki2xs0j2b.css';
import '../../css/c/c1fu1ybtt.css';
import '../../css/q/q3--cp34y.css';
import '../../css/n/nyuxu4kzd.css';
import '../../css/a/aj9l3zbaq.css';
import '../../css/z/zxjz1r9zo.css';
import '../../css/h/hlq60z2ms.css';
import '../../css/w/wdphd8b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lgip3s0tm wm-shadow"/><path class="ki2xs0j2b"/><path class="c1fu1ybtt"/><path class="q3--cp34y"/><path class="nyuxu4kzd"/><path class="aj9l3zbaq"/><path class="zxjz1r9zo"/><path class="hlq60z2ms"/><path class="wdphd8b3t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:nutcracker"} {...others} />);
}

export default Component;

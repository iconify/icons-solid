import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zx7h3uicz.css';
import '../../css/k/kpbf32bxe.css';
import '../../css/c/co407c62o.css';
import '../../css/h/hiis3vbjk.css';
import '../../css/c/c4ppv22xk.css';
import '../../css/d/dumcr2b5e.css';
import '../../css/j/j97tu9b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zx7h3uicz"/><path class="kpbf32bxe wm-deco"/><path class="co407c62o wm-deco"/><path class="hiis3vbjk wm-k"/><path class="c4ppv22xk wm-a"/><path class="dumcr2b5e wm-s"/><path class="j97tu9b6b wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-dot-blueprint"} {...others} />);
}

export default Component;

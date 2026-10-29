import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rs6n0qb6r.css';
import '../../css/g/ggn84jant.css';
import '../../css/p/p7hy21fel.css';
import '../../css/h/hiis3vbjk.css';
import '../../css/c/c4ppv22xk.css';
import '../../css/x/xfklkptiz.css';
import '../../css/j/j97tu9b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rs6n0qb6r wm-deco"/><path class="ggn84jant wm-deco"/><path class="p7hy21fel wm-deco"/><path class="hiis3vbjk wm-k"/><path class="c4ppv22xk wm-a"/><path class="wm-s xfklkptiz"/><path class="j97tu9b6b wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-minus-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tlirfxwnd.css';
import '../../css/r/rkdjjkbvw.css';
import '../../css/o/oq27kf3sz.css';
import '../../css/k/k431cdbin.css';
import '../../css/g/g_qa_x7le.css';
import '../../css/c/c12yn3gdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tlirfxwnd wm-deco"/><path class="rkdjjkbvw wm-deco"/><path class="oq27kf3sz wm-k"/><path class="k431cdbin wm-a"/><path class="g_qa_x7le wm-k"/><path class="c12yn3gdl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:euro-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plx-hyt4b.css';
import '../../css/i/ijvjwrubx.css';
import '../../css/o/o5w07jsez.css';
import '../../css/t/tqop_l45f.css';
import '../../css/h/h-h-8ccng.css';
import '../../css/c/cajm6-_qh.css';
import '../../css/l/lkhb_8b-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="plx-hyt4b"/><path clip-rule="evenodd" class="ijvjwrubx"/><path clip-rule="evenodd" class="o5w07jsez"/><path clip-rule="evenodd" class="tqop_l45f"/><path clip-rule="evenodd" class="h-h-8ccng"/><path class="cajm6-_qh"/><path clip-rule="evenodd" class="lkhb_8b-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:female-condom2x-outline"} {...others} />);
}

export default Component;

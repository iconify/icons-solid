import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hhbb8vr-b.css';
import '../../css/s/sv9dpgb3c.css';
import '../../css/i/i_r924b3i.css';
import '../../css/t/tx1l_fszj.css';
import '../../css/a/aydzuvbkz.css';
import '../../css/k/kjyj4ubca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hhbb8vr-b wm-deco"/><path class="sv9dpgb3c wm-deco"/><path class="i_r924b3i wm-deco"/><path class="tx1l_fszj wm-k"/><path class="aydzuvbkz wm-a"/><path class="kjyj4ubca wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gavel-blueprint"} {...others} />);
}

export default Component;

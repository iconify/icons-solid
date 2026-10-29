import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uy881ybxx.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/u/uh5jk-bmu.css';
import '../../css/v/vn62m23aq.css';
import '../../css/s/sdyw8fb6z.css';
import '../../css/q/qtk4mou_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="uy881ybxx wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="uh5jk-bmu wm-k"/><path class="vn62m23aq wm-a"/><path class="sdyw8fb6z wm-k"/><path class="qtk4mou_m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:save-all-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k_mm32bgj.css';
import '../../css/c/cmdmfluho.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/l/l7zq_8b5u.css';
import '../../css/p/pq0qm0v-a.css';
import '../../css/b/b86m5ybhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k_mm32bgj wm-deco"/><path class="cmdmfluho wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="l7zq_8b5u wm-k"/><path class="pq0qm0v-a wm-a"/><path class="b86m5ybhz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lollipop-blueprint"} {...others} />);
}

export default Component;

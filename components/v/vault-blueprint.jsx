import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lc7hyzboo.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/g/gxcwj_bjs.css';
import '../../css/n/nlr_vsb6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lc7hyzboo wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="gxcwj_bjs wm-k"/><path class="nlr_vsb6u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vault-blueprint"} {...others} />);
}

export default Component;

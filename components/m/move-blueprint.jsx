import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/brye_nbes.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/z/zvszdccwg.css';
import '../../css/n/ngurz8bhm.css';
import '../../css/d/dgp8ihnse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="brye_nbes wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k zvszdccwg"/><path class="ngurz8bhm wm-a"/><path class="dgp8ihnse wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:move-blueprint"} {...others} />);
}

export default Component;

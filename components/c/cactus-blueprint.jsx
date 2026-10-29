import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tuhlkprwc.css';
import '../../css/z/ze70yzure.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/g/g9qc5_bvs.css';
import '../../css/x/xq6-xda9y.css';
import '../../css/u/u6ifn0bki.css';
import '../../css/p/plk7g_6gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tuhlkprwc wm-deco"/><path class="wm-deco ze70yzure"/><path class="cf3uzcrzx wm-deco"/><path class="g9qc5_bvs wm-k"/><path class="wm-a xq6-xda9y"/><path class="u6ifn0bki wm-k"/><path class="plk7g_6gk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cactus-blueprint"} {...others} />);
}

export default Component;

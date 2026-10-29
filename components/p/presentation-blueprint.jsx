import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d0m0jsbve.css';
import '../../css/q/qq-_jvbcz.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/e/eu9_y7hoo.css';
import '../../css/d/dljqukb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="d0m0jsbve wm-deco"/><path class="qq-_jvbcz wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="eu9_y7hoo wm-k"/><path class="dljqukb2t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:presentation-blueprint"} {...others} />);
}

export default Component;

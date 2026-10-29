import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dd7h74lvq.css';
import '../../css/s/sbcphdcdx.css';
import '../../css/m/mwxzkr41k.css';
import '../../css/j/jn70pab_v.css';
import '../../css/f/f78e21b0t.css';
import '../../css/j/j3l-vfqkm.css';
import '../../css/f/f2x-57bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dd7h74lvq wm-deco"/><path class="sbcphdcdx wm-deco"/><path class="mwxzkr41k wm-deco"/><path class="jn70pab_v wm-k"/><path class="f78e21b0t wm-a"/><path class="j3l-vfqkm wm-s"/><path class="f2x-57bcp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-alert-blueprint"} {...others} />);
}

export default Component;

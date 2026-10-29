import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wihllw7_u.css';
import '../../css/m/m4x4acctj.css';
import '../../css/v/vr719mtpn.css';
import '../../css/x/xclfmwiju.css';
import '../../css/r/r1oo99bph.css';
import '../../css/t/tgjlk-qqh.css';
import '../../css/n/nufwbmbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wihllw7_u wm-deco"/><path class="m4x4acctj wm-deco"/><path class="vr719mtpn wm-k"/><path class="wm-a xclfmwiju"/><path class="r1oo99bph wm-s"/><path class="tgjlk-qqh wm-a"/><path class="nufwbmbhe wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-cog-blueprint"} {...others} />);
}

export default Component;

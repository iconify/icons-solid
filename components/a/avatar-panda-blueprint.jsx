import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hfxp-xbqg.css';
import '../../css/c/csigaqbdp.css';
import '../../css/q/q4jvabcts.css';
import '../../css/w/woi9uacmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hfxp-xbqg wm-deco"/><path class="csigaqbdp wm-deco"/><path class="q4jvabcts wm-k"/><path class="wm-a woi9uacmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-panda-blueprint"} {...others} />);
}

export default Component;

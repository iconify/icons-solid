import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ktebufbtx.css';
import '../../css/x/xurpiib7h.css';
import '../../css/p/pyzu0_z2g.css';
import '../../css/q/qwreyvbvf.css';
import '../../css/o/oy7i-acht.css';
import '../../css/y/yosku9bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ktebufbtx wm-deco"/><path class="wm-deco xurpiib7h"/><path class="pyzu0_z2g wm-k"/><path class="qwreyvbvf wm-a"/><path class="oy7i-acht wm-s"/><path class="wm-k yosku9bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-off-blueprint"} {...others} />);
}

export default Component;

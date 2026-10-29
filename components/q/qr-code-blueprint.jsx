import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x3sw__bck.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/w/wjqrikxcn.css';
import '../../css/f/f98ia0txa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco x3sw__bck"/><path class="cf3uzcrzx wm-deco"/><path class="wjqrikxcn wm-k"/><path class="f98ia0txa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:qr-code-blueprint"} {...others} />);
}

export default Component;

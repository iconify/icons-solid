import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wttzmdugt.css';
import '../../css/l/ljg583bic.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/g/gtc7_1b5f.css';
import '../../css/h/h4uzyibtm.css';
import '../../css/a/a5neubxnb.css';
import '../../css/w/wgr3hlb9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wttzmdugt"/><path class="ljg583bic wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="gtc7_1b5f wm-k"/><path class="h4uzyibtm wm-a"/><path class="a5neubxnb wm-s"/><path class="wgr3hlb9e wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flashlight-blueprint"} {...others} />);
}

export default Component;

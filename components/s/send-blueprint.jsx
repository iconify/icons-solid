import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aqtnzbc3d.css';
import '../../css/h/h-5_4xbim.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/x/xg7yvrt4k.css';
import '../../css/x/xznu0ibva.css';
import '../../css/a/ahnqb7bpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="aqtnzbc3d wm-deco"/><path class="h-5_4xbim wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k xg7yvrt4k"/><path class="wm-a xznu0ibva"/><path class="ahnqb7bpy wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-blueprint"} {...others} />);
}

export default Component;

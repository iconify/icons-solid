import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zui445chq.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/h/h-u5cozqr.css';
import '../../css/x/xr9qu131j.css';
import '../../css/f/fxix_iiqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zui445chq"/><path class="sdaucgb_l wm-deco"/><path class="h-u5cozqr wm-k"/><path class="wm-a xr9qu131j"/><path class="fxix_iiqi wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-video-blueprint"} {...others} />);
}

export default Component;

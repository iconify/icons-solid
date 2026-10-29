import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vt_p7bach.css';
import '../../css/c/crfxcv89k.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/o/owwxe_s9p.css';
import '../../css/j/j751fkbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vt_p7bach wm-deco"/><path class="crfxcv89k wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="owwxe_s9p"/><path class="j751fkbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sailboat-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lbkshfbwn.css';
import '../../css/e/eb2qabupy.css';
import '../../css/a/axkxll7ka.css';
import '../../css/e/ey8whr8xr.css';
import '../../css/r/r5dk_vx7g.css';
import '../../css/x/xlsaqmbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lbkshfbwn wm-deco"/><path class="eb2qabupy wm-deco"/><path class="axkxll7ka wm-k"/><path class="ey8whr8xr wm-a"/><path class="r5dk_vx7g wm-k"/><path class="wm-a xlsaqmbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:underline-blueprint"} {...others} />);
}

export default Component;

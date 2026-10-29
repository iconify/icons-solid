import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wdy7m4cqz.css';
import '../../css/e/e363s6csv.css';
import '../../css/x/xgxm_7bin.css';
import '../../css/p/pdp5-ybyr.css';
import '../../css/h/h0tj1xbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wdy7m4cqz wm-deco"/><path class="e363s6csv wm-deco"/><path class="wm-deco xgxm_7bin"/><path class="pdp5-ybyr"/><path class="h0tj1xbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headset-blueprint"} {...others} />);
}

export default Component;

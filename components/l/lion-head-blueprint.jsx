import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e7vthbc8d.css';
import '../../css/y/yknkfwbpv.css';
import '../../css/z/zsskpln1f.css';
import '../../css/d/di6ckob5e.css';
import '../../css/w/w9p-5cc-x.css';
import '../../css/x/x3yymbc0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e7vthbc8d wm-deco"/><path class="wm-deco yknkfwbpv"/><path class="wm-k zsskpln1f"/><path class="di6ckob5e wm-a"/><path class="w9p-5cc-x wm-s"/><path class="wm-k x3yymbc0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lion-head-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/su9dgwoey.css';
import '../../css/k/ku-38s29b.css';
import '../../css/z/zj798is8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="su9dgwoey wm-deco"/><path class="ku-38s29b wm-k"/><path class="wm-a zj798is8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lucky-coin-blueprint"} {...others} />);
}

export default Component;

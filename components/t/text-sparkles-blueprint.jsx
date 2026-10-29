import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ycitysbvm.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/y/yqgynubyt.css';
import '../../css/v/v5qwem13p.css';
import '../../css/x/xn00lztcf.css';
import '../../css/y/ywn-s8x3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco ycitysbvm"/><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="wm-k yqgynubyt"/><path class="v5qwem13p wm-s"/><path class="wm-k xn00lztcf"/><path class="wm-s ywn-s8x3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-sparkles-blueprint"} {...others} />);
}

export default Component;

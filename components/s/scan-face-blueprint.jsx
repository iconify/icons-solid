import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rct529mqu.css';
import '../../css/h/hqz31-bnt.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/o/oh4f1hbmh.css';
import '../../css/z/zpu53zwhs.css';
import '../../css/b/bochahbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rct529mqu wm-deco"/><path class="hqz31-bnt wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="oh4f1hbmh wm-k"/><path class="wm-a zpu53zwhs"/><path class="bochahbmj wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-face-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aq69r9byh.css';
import '../../css/l/lvx6itxnk.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/w/wfsha8jvf.css';
import '../../css/d/domdhwbzo.css';
import '../../css/b/b86m5ybhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="aq69r9byh wm-deco"/><path class="lvx6itxnk wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="wfsha8jvf wm-k"/><path class="domdhwbzo wm-a"/><path class="b86m5ybhz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:carrot-blueprint"} {...others} />);
}

export default Component;

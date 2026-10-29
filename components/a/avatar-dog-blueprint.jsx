import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xeopvvbys.css';
import '../../css/k/k5n2fya3g.css';
import '../../css/r/r1yzrf19m.css';
import '../../css/n/nw0ur9bef.css';
import '../../css/r/rw4xbp_fn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xeopvvbys"/><path class="k5n2fya3g wm-deco"/><path class="r1yzrf19m wm-deco"/><path class="nw0ur9bef wm-k"/><path class="rw4xbp_fn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-dog-blueprint"} {...others} />);
}

export default Component;

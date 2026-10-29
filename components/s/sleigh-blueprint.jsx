import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lwy59cd4v.css';
import '../../css/i/i4vp2vc3r.css';
import '../../css/q/qmauy_88m.css';
import '../../css/s/sx5y0mhtr.css';
import '../../css/b/bc698pr8y.css';
import '../../css/y/ysyoadbac.css';
import '../../css/z/zdef0qb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lwy59cd4v wm-deco"/><path class="i4vp2vc3r wm-deco"/><path class="qmauy_88m wm-deco"/><path class="sx5y0mhtr wm-k"/><path class="bc698pr8y wm-a"/><path class="wm-k ysyoadbac"/><path class="wm-a zdef0qb0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sleigh-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xpxstlblx.css';
import '../../css/a/ae-w54boi.css';
import '../../css/f/fhzl1918m.css';
import '../../css/l/lq23_x48i.css';
import '../../css/c/crfdhtb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xpxstlblx"/><path class="ae-w54boi wm-deco"/><path class="fhzl1918m wm-k"/><path class="lq23_x48i wm-a"/><path class="crfdhtb4g wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:container-blueprint"} {...others} />);
}

export default Component;

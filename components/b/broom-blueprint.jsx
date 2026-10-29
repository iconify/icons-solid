import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lhnaep5ah.css';
import '../../css/k/kya_atw0f.css';
import '../../css/a/aoozyu66l.css';
import '../../css/x/xl4x9fb_h.css';
import '../../css/z/zn_5tzyza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lhnaep5ah wm-deco"/><path class="kya_atw0f wm-deco"/><path class="aoozyu66l wm-k"/><path class="wm-a xl4x9fb_h"/><path class="wm-a zn_5tzyza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:broom-blueprint"} {...others} />);
}

export default Component;

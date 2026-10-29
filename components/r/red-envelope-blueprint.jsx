import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q8jgfwb-b.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/m/mv85hfbyp.css';
import '../../css/p/p19yvk-0i.css';
import '../../css/p/p-5jg0y5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="q8jgfwb-b wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="mv85hfbyp wm-k"/><path class="p19yvk-0i wm-a"/><path class="p-5jg0y5a wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:red-envelope-blueprint"} {...others} />);
}

export default Component;

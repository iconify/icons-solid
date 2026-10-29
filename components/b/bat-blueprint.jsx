import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s2fzgqp6w.css';
import '../../css/v/vke7uysby.css';
import '../../css/o/oorih5bvf.css';
import '../../css/x/xt8yg9bhd.css';
import '../../css/y/yw1d64mhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s2fzgqp6w wm-deco"/><path class="vke7uysby wm-deco"/><path class="oorih5bvf wm-deco"/><path class="wm-k xt8yg9bhd"/><path class="wm-a yw1d64mhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bat-blueprint"} {...others} />);
}

export default Component;

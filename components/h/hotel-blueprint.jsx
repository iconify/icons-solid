import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p6vy9kb5f.css';
import '../../css/f/feovcib_o.css';
import '../../css/a/a461t3b8x.css';
import '../../css/i/i1uax2xgn.css';
import '../../css/u/um__jv-nw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p6vy9kb5f wm-deco"/><path class="feovcib_o wm-deco"/><path class="a461t3b8x wm-k"/><path class="i1uax2xgn wm-s"/><path class="um__jv-nw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hotel-blueprint"} {...others} />);
}

export default Component;

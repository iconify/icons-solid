import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fok4y7jnx.css';
import '../../css/w/wo88mccpe.css';
import '../../css/h/h4o1pabcz.css';
import '../../css/m/mfk7hzexs.css';
import '../../css/h/h8uym7u6q.css';
import '../../css/e/et9ilr5ic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fok4y7jnx wm-deco"/><path class="wm-deco wo88mccpe"/><path class="h4o1pabcz wm-deco"/><path class="mfk7hzexs wm-k"/><path class="h8uym7u6q wm-a"/><path class="et9ilr5ic wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:golf-blueprint"} {...others} />);
}

export default Component;

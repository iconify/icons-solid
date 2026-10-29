import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u8jvivt2y.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/o/o3tkwvr2o.css';
import '../../css/x/xnp0x9brw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="u8jvivt2y wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="o3tkwvr2o wm-k"/><path class="wm-k xnp0x9brw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-circle-blueprint"} {...others} />);
}

export default Component;

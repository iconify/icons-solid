import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x6a4321nx.css';
import '../../css/j/jxp3unj0v.css';
import '../../css/y/yonu32bng.css';
import '../../css/x/xp-vb_b5f.css';
import '../../css/n/nco5jnbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco x6a4321nx"/><path class="jxp3unj0v wm-deco"/><path class="wm-deco yonu32bng"/><path class="xp-vb_b5f"/><path class="nco5jnbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:christmas-candle-blueprint"} {...others} />);
}

export default Component;

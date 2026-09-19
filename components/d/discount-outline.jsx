import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh24-wisb.css';
import '../../css/j/j8oohibxs.css';
import '../../css/v/v9_ws6bey.css';
import '../../css/x/xns_rckoq.css';
import '../../css/v/v0sro-x5z.css';
import '../../css/l/lnp6hssgn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kh24-wisb"/><path clip-rule="evenodd" class="j8oohibxs"/><path clip-rule="evenodd" class="v9_ws6bey"/><path class="xns_rckoq"/><path clip-rule="evenodd" class="v0sro-x5z"/><path clip-rule="evenodd" class="lnp6hssgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:discount-outline"} {...others} />);
}

export default Component;

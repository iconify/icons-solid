import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/r/rmlr-cb_v.css';
import '../../css/s/s0o3wtbvh.css';
import '../../css/u/u80mkcbea.css';
import '../../css/h/hki4jtcxn.css';
import '../../css/u/uz6a7pbvy.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="rmlr-cb_v"/><path class="s0o3wtbvh"/><path class="u80mkcbea"/><path class="hki4jtcxn"/><path class="uz6a7pbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:gmail-dark"} {...others} />);
}

export default Component;

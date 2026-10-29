import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8uk0abyx.css';
import '../../css/n/nk_-dvvqe.css';
import '../../css/m/m7p7nacaa.css';
import '../../css/i/izmadeb7p.css';
import '../../css/r/r7ts-hb9o.css';
import '../../css/x/xrpkub6jt.css';
import '../../css/y/y2r23xomr.css';
import '../../css/e/e9bca4dgb.css';
import '../../css/o/o2ayqyrup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u8uk0abyx wm-shadow"/><path class="nk_-dvvqe wm-shadow"/><path class="m7p7nacaa"/><path class="izmadeb7p"/><path class="r7ts-hb9o"/><path class="xrpkub6jt"/><path class="wm-shine y2r23xomr"/><path class="e9bca4dgb wm-shine"/><path class="o2ayqyrup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:corner-down-left"} {...others} />);
}

export default Component;

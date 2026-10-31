import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/njotjuwbq.css';
import '../../css/t/tofc7o3so.css';
import '../../css/q/qcl_macpa.css';
import '../../css/l/lbfsknb3o.css';
import '../../css/z/z3lc_ybga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="njotjuwbq wm-shadow"/><path class="tofc7o3so wm-shadow"/><path class="qcl_macpa"/><path class="lbfsknb3o"/><path class="z3lc_ybga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:layout-list"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fayq1yzso.css';
import '../../css/k/ka_uhbckf.css';
import '../../css/r/ryp_kebrt.css';
import '../../css/x/xlocksb5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fayq1yzso"/><path class="ka_uhbckf"/><path class="ryp_kebrt"/><path class="xlocksb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weight"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgmazyb4r.css';
import '../../css/w/wso220b1w.css';
import '../../css/t/t6_kdsuvv.css';
import '../../css/i/i7067ux3m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wgmazyb4r"><path class="wso220b1w"/><path class="t6_kdsuvv"/><path class="i7067ux3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:process"} {...others} />);
}

export default Component;

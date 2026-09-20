import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/l/lju5ynbhb.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="xgaf0nbdt"/><path class="lju5ynbhb"/><path class="ju8v6k8zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-alert-sharp"} {...others} />);
}

export default Component;

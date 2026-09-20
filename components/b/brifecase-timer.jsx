import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/rh_fox7ue.css';
import '../../css/b/b40u25bhd.css';
import '../../css/l/lwenppemr.css';
import '../../css/x/x8uq8pl-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="rh_fox7ue"/><path class="b40u25bhd"/><path class="lwenppemr"/><path class="x8uq8pl-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brifecase-timer"} {...others} />);
}

export default Component;

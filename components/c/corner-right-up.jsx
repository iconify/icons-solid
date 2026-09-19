import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r4k8tbczt.css';
import '../../css/k/kslkmaccd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r4k8tbczt"/><path class="kslkmaccd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-right-up"} {...others} />);
}

export default Component;

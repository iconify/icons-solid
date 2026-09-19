import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vkpgi_38m.css';
import '../../css/x/x3kdk1lns.css';
import '../../css/k/kio-44_ap.css';
import '../../css/s/sghr45v4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="vkpgi_38m"/><path class="x3kdk1lns"/><path class="kio-44_ap"/><path class="sghr45v4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fm"} {...others} />);
}

export default Component;

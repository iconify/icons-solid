import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fqarnac2p.css';
import '../../css/t/ty0pkwo0e.css';
import '../../css/n/nsv2dr6tc.css';
import '../../css/x/xhx33fg5l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="fqarnac2p"/><path class="ty0pkwo0e"/><path class="nsv2dr6tc"/><path class="xhx33fg5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pound"} {...others} />);
}

export default Component;

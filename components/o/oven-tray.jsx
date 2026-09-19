import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/c/cz7j3e4wj.css';
import '../../css/c/cnmqsablm.css';
import '../../css/l/lcr-0gr_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="wzzwdrbyq"/><path class="cz7j3e4wj"/><path class="cnmqsablm"/><path class="lcr-0gr_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:oven-tray"} {...others} />);
}

export default Component;

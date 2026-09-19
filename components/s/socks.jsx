import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fdlfa_9yz.css';
import '../../css/w/wumfu6ygf.css';
import '../../css/o/oen13xbcm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="fdlfa_9yz"/><path class="wumfu6ygf"/><path class="oen13xbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:socks"} {...others} />);
}

export default Component;

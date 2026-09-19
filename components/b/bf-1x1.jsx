import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l6ip3yb8b.css';
import '../../css/n/n3oehdbmu.css';
import '../../css/f/f7-rvmbox.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="l6ip3yb8b"/><path class="n3oehdbmu"/></g><path class="f7-rvmbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bf-1x1"} {...others} />);
}

export default Component;

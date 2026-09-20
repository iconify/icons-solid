import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/iumob5e9e.css';
import '../../css/w/wcz3c02rs.css';
import '../../css/d/df4ydac7s.css';
import '../../css/y/y1xu7ibpb.css';
import '../../css/m/mo93ri__q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="iumob5e9e"/><path class="wcz3c02rs"/><path class="df4ydac7s"/><ellipse class="y1xu7ibpb"/><ellipse class="mo93ri__q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-smile-broken"} {...others} />);
}

export default Component;

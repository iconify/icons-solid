import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwsggl4nt.css';
import '../../css/w/w2kpx3bru.css';
import '../../css/b/bajemy94v.css';
import '../../css/v/vfdxbdcpq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bwsggl4nt"/><path class="w2kpx3bru"/><path class="bajemy94v"/><path class="vfdxbdcpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heartribbon"} {...others} />);
}

export default Component;

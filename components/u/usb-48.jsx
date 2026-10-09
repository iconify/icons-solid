import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d93rrjv5q.css';
import '../../css/f/fi23ronaz.css';
import '../../css/x/xmcfxni0r.css';
import '../../css/w/w577xubjl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d93rrjv5q"/><path class="fi23ronaz"/><path class="xmcfxni0r"/><path class="w577xubjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r6m8a2zeq.css';
import '../../css/x/xwg91xbgh.css';
import '../../css/l/lxy3pebla.css';
import '../../css/x/xxmq9os0r.css';
import '../../css/o/o2jy9bbob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r6m8a2zeq"/><path class="wm-k xwg91xbgh"/><path class="lxy3pebla wm-a"/><path class="wm-k xxmq9os0r"/><path class="o2jy9bbob wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-pair-sketch"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xqoljcblo.css';
import '../../css/a/aohk97bww.css';
import '../../css/q/qwyh2jbst.css';
import '../../css/q/qv7q4d64s.css';
import '../../css/m/mhq5vebwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k xqoljcblo"/><path class="aohk97bww wm-a"/><path class="qwyh2jbst wm-k"/><path class="qv7q4d64s"/><path class="mhq5vebwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:thermometer-sun"} {...others} />);
}

export default Component;

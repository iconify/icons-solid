import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bsuy9b0zv.css';
import '../../css/q/qoldq5b5w.css';
import '../../css/z/zagc9leuw.css';
import '../../css/v/vkffuubtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bsuy9b0zv wm-k"/><path class="qoldq5b5w wm-a"/><path class="wm-k zagc9leuw"/><path class="vkffuubtt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:container-sketch"} {...others} />);
}

export default Component;

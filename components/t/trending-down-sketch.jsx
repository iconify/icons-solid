import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ifb93ynzy.css';
import '../../css/t/tq1j5cbbn.css';
import '../../css/b/bak33s4ai.css';
import '../../css/a/at880-k6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ifb93ynzy wm-k"/><path class="tq1j5cbbn wm-a"/><path class="bak33s4ai wm-k"/><path class="at880-k6w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trending-down-sketch"} {...others} />);
}

export default Component;

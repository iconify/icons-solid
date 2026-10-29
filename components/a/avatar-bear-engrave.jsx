import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/ti_-bgbup.css';
import '../../css/s/svnjt8bpr.css';
import '../../css/m/mdvkx-geo.css';
import '../../css/u/uxz8njb2w.css';
import '../../css/i/i-oq5ub8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ti_-bgbup wm-k"/><path class="svnjt8bpr wm-shadow"/><path class="mdvkx-geo wm-k"/><path class="uxz8njb2w wm-k"/><path class="i-oq5ub8f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-bear-engrave"} {...others} />);
}

export default Component;

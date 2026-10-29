import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r1g_5yb4r.css';
import '../../css/o/orz2mhkcr.css';
import '../../css/i/ijn6pr5vz.css';
import '../../css/b/bz53b7bod.css';
import '../../css/b/b9sgj1b_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r1g_5yb4r"/><path class="orz2mhkcr wm-k"/><path class="ijn6pr5vz wm-a"/><path class="bz53b7bod wm-k"/><path class="b9sgj1b_v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sandwich-sketch"} {...others} />);
}

export default Component;

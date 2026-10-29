import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rzxk7-smr.css';
import '../../css/f/f7se-fbvj.css';
import '../../css/q/q-55d_bvt.css';
import '../../css/s/sq9ejvb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rzxk7-smr wm-k"/><path class="f7se-fbvj wm-shadow"/><path class="q-55d_bvt wm-k"/><path class="sq9ejvb2i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ticket-percent-engrave"} {...others} />);
}

export default Component;

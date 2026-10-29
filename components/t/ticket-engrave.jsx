import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mecf0cntj.css';
import '../../css/f/f7se-fbvj.css';
import '../../css/q/q-55d_bvt.css';
import '../../css/a/a3092jbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mecf0cntj wm-k"/><path class="f7se-fbvj wm-shadow"/><path class="q-55d_bvt wm-k"/><path class="a3092jbvt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ticket-engrave"} {...others} />);
}

export default Component;

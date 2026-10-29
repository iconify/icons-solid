import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/h/hx2mzrprj.css';
import '../../css/f/fo3gdfn_q.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/x/x2ocqx88i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="hx2mzrprj wm-s"/><path class="fo3gdfn_q wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="wm-s x2ocqx88i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-star-engrave"} {...others} />);
}

export default Component;

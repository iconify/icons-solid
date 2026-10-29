import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/djiqt-b-p.css';
import '../../css/u/utwv_dard.css';
import '../../css/g/g-ayowdns.css';
import '../../css/e/emha3wbqe.css';
import '../../css/i/ihj2_9b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="djiqt-b-p wm-k"/><path class="utwv_dard wm-s"/><path class="g-ayowdns wm-shadow"/><path class="emha3wbqe wm-k"/><path class="ihj2_9b2p wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-minus-engrave"} {...others} />);
}

export default Component;

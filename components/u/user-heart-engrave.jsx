import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/q/qpvrooc1e.css';
import '../../css/f/fdic79byo.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/v/vi7r50kxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="qpvrooc1e wm-s"/><path class="fdic79byo wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="vi7r50kxj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-heart-engrave"} {...others} />);
}

export default Component;

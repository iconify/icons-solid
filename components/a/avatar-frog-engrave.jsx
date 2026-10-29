import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/btguhia5p.css';
import '../../css/a/ac_7wobms.css';
import '../../css/b/bfi0x3beo.css';
import '../../css/i/izujc22-d.css';
import '../../css/j/j9br22bqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="btguhia5p wm-k"/><path class="ac_7wobms wm-shadow"/><path class="bfi0x3beo wm-k"/><path class="izujc22-d wm-k"/><path class="j9br22bqu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-frog-engrave"} {...others} />);
}

export default Component;

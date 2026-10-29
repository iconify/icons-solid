import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/phvbzeo-p.css';
import '../../css/j/j---ejbcs.css';
import '../../css/j/jfb-yjbgw.css';
import '../../css/q/qaz17vbsh.css';
import '../../css/k/kwybaobhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="phvbzeo-p wm-k"/><path class="j---ejbcs wm-shadow"/><path class="jfb-yjbgw wm-k"/><path class="qaz17vbsh wm-k"/><path class="kwybaobhx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-marked-engrave"} {...others} />);
}

export default Component;

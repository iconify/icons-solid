import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zv3vqsbru.css';
import '../../css/k/k9wk0pamy.css';
import '../../css/d/ddxgv6bhb.css';
import '../../css/k/knkcmsicq.css';
import '../../css/y/ym0uy3fvu.css';
import '../../css/o/oxf_yg5jj.css';
import '../../css/o/oj3ux-b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zv3vqsbru"/><path class="k9wk0pamy wm-k"/><path class="ddxgv6bhb wm-a"/><path class="knkcmsicq wm-s"/><path class="wm-k ym0uy3fvu"/><path class="oxf_yg5jj wm-a"/><path class="oj3ux-b8x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-check-sketch"} {...others} />);
}

export default Component;

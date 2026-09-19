import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/px5rx3bfu.css';
import '../../css/d/d_4_d11xq.css';
import '../../css/t/tphifsbxc.css';
import '../../css/v/vq3dajbed.css';
import '../../css/y/yeau1bb_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="px5rx3bfu"/><path class="d_4_d11xq"/><path class="tphifsbxc"/><path class="vq3dajbed"/><path class="yeau1bb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:small-shop-alt"} {...others} />);
}

export default Component;

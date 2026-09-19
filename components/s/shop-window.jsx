import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tphifsbxc.css';
import '../../css/v/vq3dajbed.css';
import '../../css/y/yeau1bb_s.css';
import '../../css/p/px5rx3bfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tphifsbxc"/><path class="vq3dajbed"/><path class="yeau1bb_s"/><path class="px5rx3bfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shop-window"} {...others} />);
}

export default Component;

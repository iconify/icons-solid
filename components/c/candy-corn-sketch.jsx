import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gd3bepv6n.css';
import '../../css/b/bxopbp_ep.css';
import '../../css/j/jeinx0bni.css';
import '../../css/g/g9c1bowot.css';
import '../../css/r/rau83ebpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gd3bepv6n"/><path class="bxopbp_ep wm-k"/><path class="jeinx0bni wm-a"/><path class="g9c1bowot wm-k"/><path class="rau83ebpx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-corn-sketch"} {...others} />);
}

export default Component;

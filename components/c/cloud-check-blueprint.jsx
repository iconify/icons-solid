import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zh0chjbis.css';
import '../../css/r/rz0bsmbuo.css';
import '../../css/y/yirdbjb_m.css';
import '../../css/t/tm19bt68n.css';
import '../../css/i/ipxsthbzk.css';
import '../../css/g/g6_477byu.css';
import '../../css/t/tso77gb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zh0chjbis"/><path class="rz0bsmbuo wm-deco"/><path class="wm-deco yirdbjb_m"/><path class="tm19bt68n wm-k"/><path class="ipxsthbzk wm-s"/><path class="g6_477byu wm-k"/><path class="tso77gb2k wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-check-blueprint"} {...others} />);
}

export default Component;

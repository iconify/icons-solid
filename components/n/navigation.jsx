import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ew7glzknu.css';
import '../../css/y/yqqjq3o2m.css';
import '../../css/l/lzty10cnk.css';
import '../../css/b/bqxjzbxyu.css';
import '../../css/y/yz8lhdpqh.css';
import '../../css/m/mtq8x98yz.css';
import '../../css/e/e19uabb9p.css';
import '../../css/x/xszxa71ox.css';
import '../../css/m/mn-datbas.css';
import '../../css/u/u6ine2cys.css';
import '../../css/z/zi4chgbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ew7glzknu wm-shadow"/><path class="yqqjq3o2m"/><path class="lzty10cnk"/><path class="bqxjzbxyu"/><path class="yz8lhdpqh"/><path class="mtq8x98yz"/><path class="e19uabb9p"/><path class="xszxa71ox"/><path class="mn-datbas"/><path class="u6ine2cys wm-shine"/><path class="wm-shine zi4chgbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:navigation"} {...others} />);
}

export default Component;

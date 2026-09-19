import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgzvtni0v.css';
import '../../css/k/ktgwqibhp.css';
import '../../css/i/iuxonccth.css';
import '../../css/m/myhoh63zy.css';
import '../../css/c/czmv-d3bz.css';
import '../../css/w/wnog6fb_q.css';
import '../../css/h/h8wfs2bfu.css';
import '../../css/c/cpj0pybtc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rgzvtni0v"/><circle class="ktgwqibhp"/><circle class="iuxonccth"/><circle class="myhoh63zy"/><path class="czmv-d3bz"/><path class="wnog6fb_q"/><path class="h8wfs2bfu"/><path class="cpj0pybtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:horizontaltrafficlight"} {...others} />);
}

export default Component;

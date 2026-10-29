import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt_y3cgnm.css';
import '../../css/q/qy7yumb8c.css';
import '../../css/w/w_litzpbe.css';
import '../../css/s/sk8td35rc.css';
import '../../css/n/nryxlkbsf.css';
import '../../css/n/ndqes-boc.css';
import '../../css/l/l78_vwleg.css';
import '../../css/w/wjmkjhbxt.css';
import '../../css/x/xbrop4brg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xt_y3cgnm"/><path class="qy7yumb8c wm-k"/><path class="w_litzpbe wm-k"/><path class="sk8td35rc wm-shine"/><path class="nryxlkbsf wm-a"/><path class="ndqes-boc wm-a"/><path class="l78_vwleg wm-a"/><path class="wjmkjhbxt wm-shine"/><path class="wm-a xbrop4brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bauble"} {...others} />);
}

export default Component;

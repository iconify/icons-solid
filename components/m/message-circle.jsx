import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/f6ux84bcq.css';
import '../../css/w/w7w2o8q5m.css';
import '../../css/l/l60xuyf9w.css';
import '../../css/y/y1pezbcpm.css';
import '../../css/m/miz07yg8o.css';
import '../../css/x/xwi6s7p1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDgqDdcJK" x1="9" x2="15" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGDgqDdcJK)" class="f6ux84bcq"/><path class="w7w2o8q5m wm-shine"/><path class="l60xuyf9w wm-shine"/><path class="wm-shine y1pezbcpm"/><path class="miz07yg8o wm-shine"/><path class="wm-shine xwi6s7p1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:message-circle"} {...others} />);
}

export default Component;

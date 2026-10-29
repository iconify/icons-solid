import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp4qzkbwh.css';
import '../../css/c/c8923qbfb.css';
import '../../css/y/y6bqeujuo.css';
import '../../css/y/ygjipwbee.css';
import '../../css/e/ejx6im5sc.css';
import '../../css/v/vhq6pn9jq.css';
import '../../css/s/sh1prcc3e.css';
import '../../css/f/fwbaf0r0c.css';
import '../../css/g/gkeq0jf5n.css';
import '../../css/l/lfdu1-riz.css';
import '../../css/a/apf3bmbkq.css';
import '../../css/c/cgub1nbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cp4qzkbwh wm-shadow"/><path class="c8923qbfb wm-a"/><path class="wm-a y6bqeujuo"/><path class="wm-a ygjipwbee"/><path class="ejx6im5sc wm-a"/><path class="vhq6pn9jq wm-a"/><path class="sh1prcc3e wm-k"/><path class="fwbaf0r0c wm-k"/><path class="gkeq0jf5n wm-k"/><path class="lfdu1-riz wm-k"/><path class="apf3bmbkq wm-k"/><path class="cgub1nbnz wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:copy"} {...others} />);
}

export default Component;

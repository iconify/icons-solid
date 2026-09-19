import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/f/f98f8evyn.css';
import '../../css/n/nsqla6jpd.css';
import '../../css/w/wps4e9ynm.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="f98f8evyn"/><path class="nsqla6jpd"/><path class="wps4e9ynm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mg-1x1"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg1-5rbnm.css';
import '../../css/i/i8-ig2bjx.css';
import '../../css/x/xm9hcq-cp.css';
import '../../css/y/yeyg09bzr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pg1-5rbnm"/><path class="i8-ig2bjx"/><path class="xm9hcq-cp"/><path class="yeyg09bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:xbox"} {...others} />);
}

export default Component;

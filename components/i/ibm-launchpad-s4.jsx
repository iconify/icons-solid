import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcrs9-qzk.css';
import '../../css/r/rtwbx3bhp.css';
import '../../css/s/so8rb_4ei.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fcrs9-qzk"/><path class="rtwbx3bhp"/><path class="so8rb_4ei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-launchpad-s4"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt_isbccr.css';
import '../../css/g/gi_g19bwq.css';
import '../../css/h/hz35m3bwu.css';
import '../../css/y/yfygjjlft.css';
import '../../css/n/n9urvbcdr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rt_isbccr"/><path class="gi_g19bwq"/><path class="hz35m3bwu"/><path class="yfygjjlft"/><path class="n9urvbcdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-bitcoin-outline"} {...others} />);
}

export default Component;

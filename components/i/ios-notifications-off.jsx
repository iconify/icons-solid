import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu3wmc3lc.css';
import '../../css/q/q19_kfbvt.css';
import '../../css/a/aky-s2bza.css';
import '../../css/i/i0tq2s0-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zu3wmc3lc"/><path class="q19_kfbvt"/><path class="aky-s2bza"/><path class="i0tq2s0-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-notifications-off"} {...others} />);
}

export default Component;

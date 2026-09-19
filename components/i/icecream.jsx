import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mghh_hb2u.css';
import '../../css/n/nltaw2slp.css';
import '../../css/l/l-2lalbbq.css';
import '../../css/e/e6kavsb1h.css';
import '../../css/d/d-hfqeb1l.css';
import '../../css/l/l-0p-ub1h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mghh_hb2u"/><path class="nltaw2slp"/><path class="l-2lalbbq"/><path class="e6kavsb1h"/><path class="d-hfqeb1l"/><path class="l-0p-ub1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:icecream"} {...others} />);
}

export default Component;

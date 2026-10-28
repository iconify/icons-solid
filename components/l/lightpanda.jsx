import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa3jbicen.css';
import '../../css/o/oe7rddc0g.css';
import '../../css/d/dl_4-9bbj.css';
import '../../css/x/xdirz1b2u.css';
import '../../css/i/ilsuqih2j.css';
import '../../css/h/hkq79b52m.css';
import '../../css/m/mekbfib1v.css';
import '../../css/o/omvzo_brp.css';
import '../../css/p/pk74xs8aq.css';
import '../../css/v/vj1ak2b7g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pa3jbicen"/><path class="oe7rddc0g"/><path class="dl_4-9bbj"/><path class="xdirz1b2u"/><path class="ilsuqih2j"/><path class="hkq79b52m"/><path class="mekbfib1v"/><path class="omvzo_brp"/><path class="pk74xs8aq"/><path class="vj1ak2b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lightpanda"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkk820mfz.css';
import '../../css/w/w2_kf1b2m.css';
import '../../css/o/otnlq3hse.css';
import '../../css/n/n74yk5bpx.css';
import '../../css/t/t7drx1vrf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hkk820mfz"/><path class="w2_kf1b2m"/><path class="otnlq3hse"/><path class="n74yk5bpx"/><path class="t7drx1vrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-share-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkk820mfz.css';
import '../../css/w/w2_kf1b2m.css';
import '../../css/y/yk26dnbcq.css';
import '../../css/y/ywwm5s49b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hkk820mfz"/><path class="w2_kf1b2m"/><path class="yk26dnbcq"/><path class="ywwm5s49b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:autonomous-car-48"} {...others} />);
}

export default Component;

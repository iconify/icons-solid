import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqi9nibps.css';
import '../../css/q/qu7t8acvf.css';
import '../../css/p/p0jryn3-f.css';
import '../../css/k/kdrnv1wyl.css';
import '../../css/t/ti-0s04_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bqi9nibps"/><path class="qu7t8acvf"/><path class="p0jryn3-f"/><path class="kdrnv1wyl"/><path class="ti-0s04_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:makeupbag"} {...others} />);
}

export default Component;

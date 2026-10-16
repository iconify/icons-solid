import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8ty_obto.css';
import '../../css/k/k5iv_0bgd.css';
import '../../css/q/q2a6e-bhn.css';
import '../../css/v/vw-knh15p.css';
import '../../css/e/e1y966bxd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q8ty_obto"/><path class="k5iv_0bgd"/><path class="q2a6e-bhn"/><path class="vw-knh15p"/><path class="e1y966bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pv-string-20-bold"} {...others} />);
}

export default Component;

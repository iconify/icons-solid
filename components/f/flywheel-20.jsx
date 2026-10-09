import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrp-pcbtd.css';
import '../../css/e/evoi0uzhs.css';
import '../../css/k/k34k1_ice.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qrp-pcbtd"/><path class="evoi0uzhs"/><path class="k34k1_ice"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flywheel-20"} {...others} />);
}

export default Component;

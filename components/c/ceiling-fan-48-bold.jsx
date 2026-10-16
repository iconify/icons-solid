import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sadt3upzd.css';
import '../../css/o/o1h120bif.css';
import '../../css/f/fa2x_hb5l.css';
import '../../css/v/vy4lfsb_n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sadt3upzd"/><path class="o1h120bif"/><path class="fa2x_hb5l"/><path class="vy4lfsb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-fan-48-bold"} {...others} />);
}

export default Component;

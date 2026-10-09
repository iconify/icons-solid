import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec_hp_w4i.css';
import '../../css/m/mh6unsbvq.css';
import '../../css/q/qk2_ljb_l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ec_hp_w4i"/><path class="mh6unsbvq"/><path class="qk2_ljb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-station-48-bold"} {...others} />);
}

export default Component;

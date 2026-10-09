import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtt8v1bcn.css';
import '../../css/h/h2cw1srdy.css';
import '../../css/o/o_4o-hjdo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rtt8v1bcn"/><path class="h2cw1srdy"/><path class="o_4o-hjdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crew-transfer-vessel-20-bold"} {...others} />);
}

export default Component;

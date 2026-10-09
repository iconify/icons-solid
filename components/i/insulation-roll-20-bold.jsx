import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2do86btb.css';
import '../../css/w/wh481vbyd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i2do86btb"/><path class="wh481vbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulation-roll-20-bold"} {...others} />);
}

export default Component;

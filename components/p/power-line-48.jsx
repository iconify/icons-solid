import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbo4sbc_y.css';
import '../../css/o/oowff5lqf.css';
import '../../css/q/qs2b_84ps.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mbo4sbc_y"/><path class="oowff5lqf"/><path class="qs2b_84ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-line-48"} {...others} />);
}

export default Component;

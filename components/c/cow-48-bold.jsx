import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9emokusn.css';
import '../../css/m/mpu2txpdl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m9emokusn"/><path class="mpu2txpdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cow-48-bold"} {...others} />);
}

export default Component;

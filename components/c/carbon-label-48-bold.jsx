import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8v4i5bxl.css';
import '../../css/x/xd4ug9z_q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i8v4i5bxl"/><path class="xd4ug9z_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-label-48-bold"} {...others} />);
}

export default Component;

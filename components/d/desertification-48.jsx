import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwg1c_b8g.css';
import '../../css/v/vy6oo5ohm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bwg1c_b8g"/><path class="vy6oo5ohm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desertification-48"} {...others} />);
}

export default Component;

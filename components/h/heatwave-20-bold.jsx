import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtrh8db_y.css';
import '../../css/q/qe94_hbwo.css';
import '../../css/c/ceu8rfb7m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mtrh8db_y"/><path class="qe94_hbwo"/><path class="ceu8rfb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heatwave-20-bold"} {...others} />);
}

export default Component;

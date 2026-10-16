import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh5sn9n9c.css';
import '../../css/d/d1xxgk97m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qh5sn9n9c"/><path class="d1xxgk97m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rack-and-pinion-20"} {...others} />);
}

export default Component;

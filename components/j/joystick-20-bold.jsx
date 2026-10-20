import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp7d7nb3s.css';
import '../../css/v/vqqrrtxdj.css';
import '../../css/a/a0erdxoze.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lp7d7nb3s"/><path class="vqqrrtxdj"/><path class="a0erdxoze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:joystick-20-bold"} {...others} />);
}

export default Component;

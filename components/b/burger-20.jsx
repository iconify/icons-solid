import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gav8xkmpk.css';
import '../../css/s/sux_alb4i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gav8xkmpk"/><path class="sux_alb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:burger-20"} {...others} />);
}

export default Component;

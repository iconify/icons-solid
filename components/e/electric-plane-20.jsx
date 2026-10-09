import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u75ne53rx.css';
import '../../css/q/q0cgw-bmf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u75ne53rx"/><path class="q0cgw-bmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-plane-20"} {...others} />);
}

export default Component;

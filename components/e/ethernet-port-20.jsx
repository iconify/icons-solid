import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv5yvyzmk.css';
import '../../css/y/y6o6t-piu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tv5yvyzmk"/><path class="y6o6t-piu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ethernet-port-20"} {...others} />);
}

export default Component;

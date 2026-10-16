import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zudjy0tbx.css';
import '../../css/t/te4hhac8s.css';
import '../../css/b/bat89cbei.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zudjy0tbx"/><path class="te4hhac8s"/><path class="bat89cbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lawnmower-20-bold"} {...others} />);
}

export default Component;

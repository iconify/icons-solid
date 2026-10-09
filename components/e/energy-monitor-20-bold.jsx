import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-glm68dp.css';
import '../../css/o/odoplnlhz.css';
import '../../css/y/y_vihbj5b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a-glm68dp"/><path class="odoplnlhz"/><path class="y_vihbj5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-monitor-20-bold"} {...others} />);
}

export default Component;

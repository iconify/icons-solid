import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7588rxqu.css';
import '../../css/w/w97g-pbda.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j7588rxqu"/><path class="w97g-pbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microgrid-20-bold"} {...others} />);
}

export default Component;

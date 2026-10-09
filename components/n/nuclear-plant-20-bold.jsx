import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctmyokx8x.css';
import '../../css/j/j_as-15we.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ctmyokx8x"/><path class="j_as-15we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-plant-20-bold"} {...others} />);
}

export default Component;

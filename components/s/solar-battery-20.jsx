import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_c06qbpz.css';
import '../../css/j/jb0sdb0ej.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f_c06qbpz"/><path class="jb0sdb0ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-battery-20"} {...others} />);
}

export default Component;

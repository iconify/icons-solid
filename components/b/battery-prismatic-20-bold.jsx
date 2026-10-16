import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv8mvflwb.css';
import '../../css/j/jefef3bul.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uv8mvflwb"/><path class="jefef3bul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-prismatic-20-bold"} {...others} />);
}

export default Component;

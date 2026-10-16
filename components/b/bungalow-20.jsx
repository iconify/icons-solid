import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy4ls9blv.css';
import '../../css/t/tihnfkx5z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dy4ls9blv"/><path class="tihnfkx5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bungalow-20"} {...others} />);
}

export default Component;

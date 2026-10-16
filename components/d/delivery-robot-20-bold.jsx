import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbk_it7zx.css';
import '../../css/m/m9fufbb8m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mbk_it7zx"/><path class="m9fufbb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delivery-robot-20-bold"} {...others} />);
}

export default Component;

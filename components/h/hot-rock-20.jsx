import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-vt4ubfe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r-vt4ubfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-rock-20"} {...others} />);
}

export default Component;

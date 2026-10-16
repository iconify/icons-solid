import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1fbdab9y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k1fbdab9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cavity-wall-20"} {...others} />);
}

export default Component;

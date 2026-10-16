import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9mh0ybkx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g9mh0ybkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landfill-20-bold"} {...others} />);
}

export default Component;

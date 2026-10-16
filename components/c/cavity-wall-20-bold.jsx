import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8phqb4wj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f8phqb4wj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cavity-wall-20-bold"} {...others} />);
}

export default Component;

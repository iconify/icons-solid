import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o92oj3biv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o92oj3biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ocean-acidification-20-bold"} {...others} />);
}

export default Component;

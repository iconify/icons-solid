import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9i__yblu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p9i__yblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:resistor-20-bold"} {...others} />);
}

export default Component;

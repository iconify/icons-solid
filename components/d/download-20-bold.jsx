import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm6fofg8e.css';
import '../../css/j/j9dw79bzp.css';
import '../../css/o/oypn0j-vn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hm6fofg8e"/><path class="j9dw79bzp"/><path class="oypn0j-vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-20-bold"} {...others} />);
}

export default Component;

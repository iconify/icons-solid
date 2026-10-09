import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4q0sxn6x.css';
import '../../css/p/p-3dudb8i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y4q0sxn6x"/><path class="p-3dudb8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-cloud-20-bold"} {...others} />);
}

export default Component;

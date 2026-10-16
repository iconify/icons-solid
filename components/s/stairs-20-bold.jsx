import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dae20rb8r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dae20rb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stairs-20-bold"} {...others} />);
}

export default Component;

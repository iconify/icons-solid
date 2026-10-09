import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekbu-fbrm.css';
import '../../css/x/x_ur3irsn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ekbu-fbrm"/><path class="x_ur3irsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-range-20-bold"} {...others} />);
}

export default Component;

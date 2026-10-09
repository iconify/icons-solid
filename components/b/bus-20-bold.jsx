import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trdnv0bir.css';
import '../../css/e/el1y2bj9j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="trdnv0bir"/><path class="el1y2bj9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bus-20-bold"} {...others} />);
}

export default Component;

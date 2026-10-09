import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pore5-dgs.css';
import '../../css/r/r6ewlybsz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pore5-dgs"/><path class="r6ewlybsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frame-20-bold"} {...others} />);
}

export default Component;

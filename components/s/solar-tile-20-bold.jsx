import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3ytnwbhg.css';
import '../../css/o/o89w-k64d.css';
import '../../css/c/c9uy2uufm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v3ytnwbhg"/><path class="o89w-k64d"/><path class="c9uy2uufm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tile-20-bold"} {...others} />);
}

export default Component;

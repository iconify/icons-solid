import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdy5yl5us.css';
import '../../css/k/kanbl39ly.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gdy5yl5us"/><path class="kanbl39ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-20-bold"} {...others} />);
}

export default Component;

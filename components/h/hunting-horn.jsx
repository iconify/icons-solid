import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oln5j1o1d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oln5j1o1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:hunting-horn"} {...others} />);
}

export default Component;

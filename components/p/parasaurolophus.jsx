import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu6y1bchq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pu6y1bchq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:parasaurolophus"} {...others} />);
}

export default Component;

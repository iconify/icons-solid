import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw9ye5pbm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zw9ye5pbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bowling-pin"} {...others} />);
}

export default Component;

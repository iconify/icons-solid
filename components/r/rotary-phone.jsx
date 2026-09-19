import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5_gxbcea.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f5_gxbcea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:rotary-phone"} {...others} />);
}

export default Component;

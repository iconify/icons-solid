import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w94jr_bez.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w94jr_bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:missile-launcher"} {...others} />);
}

export default Component;

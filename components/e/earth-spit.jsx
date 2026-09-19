import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9hxqcc5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9hxqcc5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:earth-spit"} {...others} />);
}

export default Component;

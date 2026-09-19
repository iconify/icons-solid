import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuy7yly5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zuy7yly5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:incoming-rocket"} {...others} />);
}

export default Component;

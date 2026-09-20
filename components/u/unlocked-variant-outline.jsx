import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8g5kacgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8g5kacgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:unlocked-variant-outline"} {...others} />);
}

export default Component;

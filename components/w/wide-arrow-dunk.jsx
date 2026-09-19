import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1v5irbnt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i1v5irbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:wide-arrow-dunk"} {...others} />);
}

export default Component;

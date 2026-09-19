import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coaklgbba.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="coaklgbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tarot-01-the-magician"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp-xl0bju.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tp-xl0bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:empty-hourglass"} {...others} />);
}

export default Component;

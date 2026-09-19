import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js-wdwglr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="js-wdwglr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:magnet-man"} {...others} />);
}

export default Component;

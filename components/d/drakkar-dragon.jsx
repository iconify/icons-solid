import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7oslieck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c7oslieck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:drakkar-dragon"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h16ti1b7h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h16ti1b7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-chess-pawn"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peqf9mqoh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="peqf9mqoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-chess-rook"} {...others} />);
}

export default Component;

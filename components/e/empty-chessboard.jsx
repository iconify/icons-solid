import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr2fz_s7e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jr2fz_s7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:empty-chessboard"} {...others} />);
}

export default Component;

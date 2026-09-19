import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8wlxxboh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s8wlxxboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:chess-bishop"} {...others} />);
}

export default Component;

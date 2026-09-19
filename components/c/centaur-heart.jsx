import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3e0tcciy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u3e0tcciy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:centaur-heart"} {...others} />);
}

export default Component;

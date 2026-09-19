import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft6uvzk5r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ft6uvzk5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:mp5k"} {...others} />);
}

export default Component;

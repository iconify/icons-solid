import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocj48bc2m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ocj48bc2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:goblin-camp"} {...others} />);
}

export default Component;

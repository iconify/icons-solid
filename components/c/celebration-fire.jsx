import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy0sv1baw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jy0sv1baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:celebration-fire"} {...others} />);
}

export default Component;

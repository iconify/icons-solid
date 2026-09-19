import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1-y4lplt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p1-y4lplt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:orb-wand"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n41-xbbbe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n41-xbbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:3d-hammer"} {...others} />);
}

export default Component;

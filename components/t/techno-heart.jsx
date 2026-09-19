import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb4t3pbgw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wb4t3pbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:techno-heart"} {...others} />);
}

export default Component;

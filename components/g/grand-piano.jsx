import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc5nh5bzm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vc5nh5bzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:grand-piano"} {...others} />);
}

export default Component;

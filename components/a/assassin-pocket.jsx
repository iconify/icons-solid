import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogq8z8wpz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ogq8z8wpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:assassin-pocket"} {...others} />);
}

export default Component;

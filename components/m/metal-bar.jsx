import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn1tm3vbz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fn1tm3vbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:metal-bar"} {...others} />);
}

export default Component;

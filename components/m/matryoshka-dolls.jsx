import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlz7dqbap.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wlz7dqbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:matryoshka-dolls"} {...others} />);
}

export default Component;

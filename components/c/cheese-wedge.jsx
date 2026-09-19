import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8zkq8rtp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n8zkq8rtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:cheese-wedge"} {...others} />);
}

export default Component;

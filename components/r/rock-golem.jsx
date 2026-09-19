import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9_t5y2ho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w9_t5y2ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:rock-golem"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd86mdi0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pd86mdi0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:venus-of-willendorf"} {...others} />);
}

export default Component;

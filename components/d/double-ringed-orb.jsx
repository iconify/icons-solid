import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe5m685gm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pe5m685gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:double-ringed-orb"} {...others} />);
}

export default Component;

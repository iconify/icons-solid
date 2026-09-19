import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzvbmsb0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xzvbmsb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:fingers-crossed"} {...others} />);
}

export default Component;

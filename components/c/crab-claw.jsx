import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg0_v2f9b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rg0_v2f9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:crab-claw"} {...others} />);
}

export default Component;

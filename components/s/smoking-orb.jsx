import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqv5e8bff.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dqv5e8bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:smoking-orb"} {...others} />);
}

export default Component;

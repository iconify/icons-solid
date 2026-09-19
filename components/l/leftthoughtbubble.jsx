import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1l1qmjew.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q1l1qmjew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:leftthoughtbubble"} {...others} />);
}

export default Component;

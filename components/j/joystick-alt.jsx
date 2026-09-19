import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df-f6gk1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="df-f6gk1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:joystick-alt"} {...others} />);
}

export default Component;

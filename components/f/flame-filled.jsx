import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df0h_ihsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="df0h_ihsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flame-filled"} {...others} />);
}

export default Component;

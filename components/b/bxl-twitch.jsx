import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el4xv0b0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="el4xv0b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-twitch"} {...others} />);
}

export default Component;

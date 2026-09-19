import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj2dx1b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj2dx1b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lg-oled55"} {...others} />);
}

export default Component;

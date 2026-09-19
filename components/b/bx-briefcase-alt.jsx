import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfjixkv7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfjixkv7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-briefcase-alt"} {...others} />);
}

export default Component;

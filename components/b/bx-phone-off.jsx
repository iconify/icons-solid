import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2xo85bth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2xo85bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-phone-off"} {...others} />);
}

export default Component;

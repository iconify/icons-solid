import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0nd1b7at.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0nd1b7at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-battery-full"} {...others} />);
}

export default Component;

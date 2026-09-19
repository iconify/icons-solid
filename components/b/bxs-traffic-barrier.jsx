import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg4na6bry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eg4na6bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-traffic-barrier"} {...others} />);
}

export default Component;

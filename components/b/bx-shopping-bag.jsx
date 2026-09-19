import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwq5dfatl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwq5dfatl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-shopping-bag"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_u9s4y3i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="i_u9s4y3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cc-text-in-tv-screen"} {...others} />);
}

export default Component;

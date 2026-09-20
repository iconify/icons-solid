import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1uq8vb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1uq8vb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-big-left-dash"} {...others} />);
}

export default Component;

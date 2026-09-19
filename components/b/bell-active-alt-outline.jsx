import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1nw5935q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1nw5935q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:bell-active-alt-outline"} {...others} />);
}

export default Component;

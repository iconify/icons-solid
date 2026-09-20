import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxfhyr3rt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxfhyr3rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:plane-takeoff"} {...others} />);
}

export default Component;

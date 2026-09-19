import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg3l_9b1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg3l_9b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:user-graduate-outline"} {...others} />);
}

export default Component;

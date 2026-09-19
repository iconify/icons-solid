import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgb91bumo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgb91bumo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-to-top-stroke-filled"} {...others} />);
}

export default Component;

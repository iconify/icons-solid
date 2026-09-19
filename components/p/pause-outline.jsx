import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfi5d0nul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfi5d0nul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:pause-outline"} {...others} />);
}

export default Component;

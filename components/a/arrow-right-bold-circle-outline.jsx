import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcl4k4fpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcl4k4fpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-right-bold-circle-outline"} {...others} />);
}

export default Component;

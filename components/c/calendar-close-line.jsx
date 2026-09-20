import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orkwv2bri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="orkwv2bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:calendar-close-line"} {...others} />);
}

export default Component;

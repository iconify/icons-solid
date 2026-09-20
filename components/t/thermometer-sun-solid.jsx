import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5_f4-b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y5_f4-b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:thermometer-sun-solid"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgdr8_b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgdr8_b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:sea-waves-solid"} {...others} />);
}

export default Component;

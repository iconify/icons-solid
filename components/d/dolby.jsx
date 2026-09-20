import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz7xyyd4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hz7xyyd4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:dolby"} {...others} />);
}

export default Component;

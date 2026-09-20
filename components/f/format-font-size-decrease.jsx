import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glx05_3hy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glx05_3hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-font-size-decrease"} {...others} />);
}

export default Component;

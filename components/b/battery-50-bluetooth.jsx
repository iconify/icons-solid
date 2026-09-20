import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m61z8jb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m61z8jb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-50-bluetooth"} {...others} />);
}

export default Component;

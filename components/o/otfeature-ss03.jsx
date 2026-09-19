import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gst0b_6kn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="gst0b_6kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:otfeature-ss03"} {...others} />);
}

export default Component;

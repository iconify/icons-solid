import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r69wl1bbx.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="r69wl1bbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:pause"} {...others} />);
}

export default Component;

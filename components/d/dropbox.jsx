import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6rrxu8ey.css';

const viewBox = {"width":432,"height":400};
const content = `<path class="a6rrxu8ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:dropbox"} {...others} />);
}

export default Component;

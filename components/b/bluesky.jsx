import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8z9hyvrf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a8z9hyvrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:bluesky"} {...others} />);
}

export default Component;

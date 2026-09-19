import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px4e0xvna.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="px4e0xvna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:chrome"} {...others} />);
}

export default Component;

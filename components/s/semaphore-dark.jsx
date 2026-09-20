import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh4x1nwdf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wh4x1nwdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:semaphore-dark"} {...others} />);
}

export default Component;

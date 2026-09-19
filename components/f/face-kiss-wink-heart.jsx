import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dja5gvbeb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dja5gvbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:face-kiss-wink-heart"} {...others} />);
}

export default Component;

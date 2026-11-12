import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smq3h324s.css';
import '../../css/r/r-6ekkbps.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="smq3h324s"/><path class="r-6ekkbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:toparr-light"} {...others} />);
}

export default Component;

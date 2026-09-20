import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddkf61byi.css';
import '../../css/s/s45cdxblk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ddkf61byi"/><path class="s45cdxblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reveal-js"} {...others} />);
}

export default Component;

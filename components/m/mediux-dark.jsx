import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5rq7pvid.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s5rq7pvid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediux-dark"} {...others} />);
}

export default Component;

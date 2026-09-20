import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llncxpb1h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="llncxpb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:thingsboard-dark"} {...others} />);
}

export default Component;

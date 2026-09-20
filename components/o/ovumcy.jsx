import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5dfbibhl.css';
import '../../css/r/ry3gupwsq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u5dfbibhl"/><path class="ry3gupwsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ovumcy"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9blw_16z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9blw_16z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tsdproxy-light"} {...others} />);
}

export default Component;

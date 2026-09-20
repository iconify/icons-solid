import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_hx8ibfj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d_hx8ibfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:surfshark-dark"} {...others} />);
}

export default Component;

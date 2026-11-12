import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-2q8bc0s.css';
import '../../css/s/s4czx2bgp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m-2q8bc0s"/><path class="s4czx2bgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hawser-light"} {...others} />);
}

export default Component;

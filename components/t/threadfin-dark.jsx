import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqdnidbra.css';
import '../../css/z/zkw9hjbwn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iqdnidbra"/><path class="zkw9hjbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:threadfin-dark"} {...others} />);
}

export default Component;

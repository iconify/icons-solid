import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in4fcbbhz.css';
import '../../css/d/dellb70ic.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="in4fcbbhz"/><path class="dellb70ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:funkwhale"} {...others} />);
}

export default Component;

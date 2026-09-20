import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eeybvhwms.css';
import '../../css/j/jv6twq_6q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eeybvhwms"/><path class="jv6twq_6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:verifywise"} {...others} />);
}

export default Component;

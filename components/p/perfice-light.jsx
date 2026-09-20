import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvu2p6bej.css';
import '../../css/s/ss065ksnd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dvu2p6bej"/><path class="ss065ksnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:perfice-light"} {...others} />);
}

export default Component;

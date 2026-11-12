import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rllixy2pz.css';
import '../../css/d/d7qghsrap.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rllixy2pz"/><path class="d7qghsrap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:webhook-tester-dark"} {...others} />);
}

export default Component;

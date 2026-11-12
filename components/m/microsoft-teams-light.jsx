import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f34x6acyd.css';
import '../../css/s/stvmudbrq.css';
import '../../css/l/l3_nh_z-f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f34x6acyd"/><path class="stvmudbrq"/><path class="l3_nh_z-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-teams-light"} {...others} />);
}

export default Component;

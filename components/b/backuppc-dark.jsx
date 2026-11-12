import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt75vhbsg.css';
import '../../css/y/y4cd3rkme.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kt75vhbsg"/><path class="y4cd3rkme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:backuppc-dark"} {...others} />);
}

export default Component;

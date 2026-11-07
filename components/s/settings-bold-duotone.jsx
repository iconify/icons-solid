import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gce_q8bwk.css';
import '../../css/p/pahtwyu4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gce_q8bwk"/><path class="pahtwyu4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:settings-bold-duotone"} {...others} />);
}

export default Component;

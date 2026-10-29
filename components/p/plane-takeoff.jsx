import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4k8x7q-f.css';
import '../../css/a/a34rrebrp.css';
import '../../css/p/ptdetsbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p4k8x7q-f wm-k"/><path class="a34rrebrp wm-k"/><path class="ptdetsbsf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:plane-takeoff"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0ytuur1g.css';
import '../../css/i/iszoktbeh.css';
import '../../css/y/yez_mgb3n.css';
import '../../css/a/acs2urb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0ytuur1g"/><path class="iszoktbeh"/><path class="yez_mgb3n"/><path clip-rule="evenodd" class="acs2urb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:window-frame-outline"} {...others} />);
}

export default Component;

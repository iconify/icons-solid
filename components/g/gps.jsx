import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvb9twb3e.css';
import '../../css/q/q0sfd_b_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvb9twb3e"/><path class="q0sfd_b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:gps"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxc6vr24n.css';
import '../../css/l/lc94xtz6s.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="mxc6vr24n"/><path class="lc94xtz6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-camera-home"} {...others} />);
}

export default Component;

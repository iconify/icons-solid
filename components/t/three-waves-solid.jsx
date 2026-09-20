import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxd97lx-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxd97lx-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:three-waves-solid"} {...others} />);
}

export default Component;

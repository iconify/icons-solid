import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj3qc1jvi.css';
import '../../css/w/wp4198lwm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qj3qc1jvi"/><path class="wp4198lwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fire-minimalistic-bold-duotone"} {...others} />);
}

export default Component;

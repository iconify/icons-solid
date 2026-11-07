import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0rjtzvug.css';
import '../../css/w/wj329ubli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0rjtzvug"/><path class="wj329ubli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:verified-check-bold-duotone"} {...others} />);
}

export default Component;

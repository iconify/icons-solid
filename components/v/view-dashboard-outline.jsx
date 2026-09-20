import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv3b01bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vv3b01bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:view-dashboard-outline"} {...others} />);
}

export default Component;

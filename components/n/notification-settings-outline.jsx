import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dss09dbry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dss09dbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:notification-settings-outline"} {...others} />);
}

export default Component;

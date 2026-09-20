import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm2a5nb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qm2a5nb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-charging-90"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n666vgbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n666vgbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-charging-wireless-70"} {...others} />);
}

export default Component;

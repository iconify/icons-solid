import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqlq5clhz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqlq5clhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:solar-battery-5"} {...others} />);
}

export default Component;

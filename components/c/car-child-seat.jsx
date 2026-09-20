import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ldm2_wm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7ldm2_wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:car-child-seat"} {...others} />);
}

export default Component;

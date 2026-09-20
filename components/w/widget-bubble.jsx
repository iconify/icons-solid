import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap2_25knx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ap2_25knx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:widget-bubble"} {...others} />);
}

export default Component;

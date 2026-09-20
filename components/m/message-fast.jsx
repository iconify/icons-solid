import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rylovv_qx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rylovv_qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:message-fast"} {...others} />);
}

export default Component;

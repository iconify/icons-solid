import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3ucuab8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o3ucuab8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:network-strength-4-alert"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz8n4bbcp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vz8n4bbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:signoz-light"} {...others} />);
}

export default Component;

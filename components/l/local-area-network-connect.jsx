import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvso-p9wy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvso-p9wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:local-area-network-connect"} {...others} />);
}

export default Component;

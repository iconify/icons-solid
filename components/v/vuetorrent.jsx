import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u54g6q6wc.css';
import '../../css/m/m-64o3ble.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u54g6q6wc"/><path class="m-64o3ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vuetorrent"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s06ydqbtb.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="s06ydqbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:panorama-horizontal"} {...others} />);
}

export default Component;

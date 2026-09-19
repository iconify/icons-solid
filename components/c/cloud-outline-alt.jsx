import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldlei_y_m.css';

const viewBox = {"width":512,"height":384};
const content = `<path class="ldlei_y_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:cloud-outline-alt"} {...others} />);
}

export default Component;

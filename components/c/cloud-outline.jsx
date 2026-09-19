import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wea8hpbgw.css';

const viewBox = {"width":512,"height":384};
const content = `<path class="wea8hpbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:cloud-outline"} {...others} />);
}

export default Component;

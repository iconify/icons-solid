import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2ctyqcpf.css';
import '../../css/t/trdxx3lxf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b2ctyqcpf"/><path class="trdxx3lxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-crm"} {...others} />);
}

export default Component;

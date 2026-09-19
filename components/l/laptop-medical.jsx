import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2nxf_b8n.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="t2nxf_b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:laptop-medical"} {...others} />);
}

export default Component;

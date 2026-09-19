import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usifnk4ig.css';
import '../../css/b/bv734nb5x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="usifnk4ig"/><path class="bv734nb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-privileged-access-gateway"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydhos9v1w.css';
import '../../css/p/p7zf9gbeq.css';
import '../../css/p/pmv6vn68x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ydhos9v1w"/><path class="p7zf9gbeq"/><path class="pmv6vn68x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-vpc-endpoints"} {...others} />);
}

export default Component;

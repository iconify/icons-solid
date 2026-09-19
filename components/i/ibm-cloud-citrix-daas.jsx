import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjtl1l1wp.css';
import '../../css/b/bvlxd1b5t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rjtl1l1wp"/><path class="bvlxd1b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-citrix-daas"} {...others} />);
}

export default Component;

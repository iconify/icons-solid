import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_6u2mhvb.css';
import '../../css/q/qm-3n6bvl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_6u2mhvb"/><path class="qm-3n6bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:golf"} {...others} />);
}

export default Component;

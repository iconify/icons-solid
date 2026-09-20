import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgimn7bxc.css';
import '../../css/t/t0u4brujn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dgimn7bxc"/><path class="t0u4brujn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lunar"} {...others} />);
}

export default Component;

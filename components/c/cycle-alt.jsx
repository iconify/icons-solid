import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpbsadttl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bpbsadttl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cycle-alt"} {...others} />);
}

export default Component;

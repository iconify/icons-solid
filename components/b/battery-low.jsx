import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjswz-jcr.css';
import '../../css/j/j_z2tacpf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sjswz-jcr"/><path clip-rule="evenodd" class="j_z2tacpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:battery-low"} {...others} />);
}

export default Component;

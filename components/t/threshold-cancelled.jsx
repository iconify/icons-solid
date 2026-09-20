import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmjqnx2vm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kmjqnx2vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:threshold-cancelled"} {...others} />);
}

export default Component;
